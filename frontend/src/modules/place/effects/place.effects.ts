import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiPlaceService } from '../services/api-place.service';
import { TryToSavePlaceAction } from '../actions/TryToSavePlaceAction';
import {
    catchError,
    debounceTime,
    map,
    mergeMap,
    switchMap,
    withLatestFrom,
} from 'rxjs/operators';
import { AddPlaceAction } from '../actions/AddPlaceAction';
import { RejectSavePlaceAction } from '../actions/RejectSavePlaceAction';
import { of } from 'rxjs';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentRoomId } from '../../room/selectors/selectCurrentRoomId';
import { TryToRemovePlaceAction } from '../actions/TryToRemovePlaceAction';
import { RemovePlaceAction } from '../actions/RemovePlaceAction';
import { RejectRemovePlaceAction } from '../actions/RejectRemovePlaceAction';
import { EditPlaceAction } from '../actions/EditPlaceAction';
import { selectCurrentPlace } from '../selectors/selectCurrentPlace';
import { SetTemporaryPlaceAction } from '../actions/SetTemporaryPlaceAction';
import { RejectSetTemporaryPlaceAction } from '../actions/RejectSetTemporaryPlaceAction';
import { TryToSaveTemporaryPlaceAction } from '../actions/TryToSaveTemporaryPlaceAction';
import { UpdatePlaceAction } from '../actions/UpdatePlaceAction';
import { RejectSaveTemporaryPlaceAction } from '../actions/RejectSaveTemporaryPlaceAction';
import { ResetTemporaryPlaceAction } from '../actions/ResetTemporaryPlaceAction';

@Injectable()
export class PlaceEffects {
    @Effect()
    public savePlace$ = this.actions$.pipe(
        ofType<TryToSavePlaceAction>(TryToSavePlaceAction.type),
        debounceTime(500),
        withLatestFrom(this.store.pipe(select(selectCurrentRoomId))),
        switchMap(([action, roomId]) => {
            if (!roomId) {
                throw new Error('Expected roomId parameter');
            }

            return this.placeService.save(roomId, action.payload).pipe(
                map(
                    place =>
                        roomId &&
                        new AddPlaceAction({
                            id: roomId,
                            place: place,
                        })
                ),
                catchError(() => {
                    throw new Error('Place save failed');
                })
            );
        }),
        catchError(error => {
            console.error(error);
            return of(new RejectSavePlaceAction());
        })
    );

    @Effect()
    public removePlace$ = this.actions$.pipe(
        ofType<TryToRemovePlaceAction>(TryToRemovePlaceAction.type),
        debounceTime(500),
        withLatestFrom(this.store.pipe(select(selectCurrentRoomId))),
        switchMap(([action, roomId]) =>
            this.placeService.remove(action.payload).pipe(
                map(
                    () =>
                        roomId &&
                        new RemovePlaceAction({
                            roomId: roomId,
                            placeId: action.payload.id,
                        })
                ),
                catchError(() => {
                    console.error('Place remove failed');
                    return of(new RejectRemovePlaceAction());
                })
            )
        )
    );

    @Effect()
    public setTemporaryPlace$ = this.actions$.pipe(
        ofType<EditPlaceAction>(EditPlaceAction.type),
        withLatestFrom(this.store.pipe(select(selectCurrentPlace))),
        map(([action, place]) => {
            if (!place) {
                throw new Error('Place is not selected');
            }

            return new SetTemporaryPlaceAction(place);
        }),
        catchError(error => {
            console.error(error);
            return of(new RejectSetTemporaryPlaceAction());
        })
    );

    @Effect()
    public updatePlace$ = this.actions$.pipe(
        ofType<TryToSaveTemporaryPlaceAction>(
            TryToSaveTemporaryPlaceAction.type
        ),
        debounceTime(500),
        withLatestFrom(this.store.pipe(select(selectCurrentRoomId))),
        switchMap(([action, roomId]) => {
            if (!roomId) {
                throw new Error('Place is not selected');
            }

            return this.placeService
                .update(roomId, action.payload)
                .pipe(
                    mergeMap(place => [
                        new UpdatePlaceAction({ id: roomId, place: place }),
                        new ResetTemporaryPlaceAction(),
                    ])
                );
        }),
        catchError(error => {
            console.error(error);
            return of([
                new RejectSaveTemporaryPlaceAction(),
                new ResetTemporaryPlaceAction(),
            ]);
        })
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly placeService: ApiPlaceService
    ) {}
}
