import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiPlaceService } from '../services/api-place.service';
import { TryToSavePlaceAction } from '../actions/TryToSavePlaceAction';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AddPlaceAction } from '../actions/AddPlaceAction';
import { RejectSavePlaceAction } from '../actions/RejectSavePlaceAction';
import { of } from 'rxjs';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentRoomId } from '../../room/selectors/selectCurrentRoomId';
import { TryToRemovePlaceAction } from '../actions/TryToRemovePlaceAction';
import { RemovePlaceAction } from '../actions/RemovePlaceAction';
import { RejectRemovePlaceAction } from '../actions/RejectRemovePlaceAction';

@Injectable()
export class PlaceEffects {
    @Effect()
    public savePlace$ = this.actions$.pipe(
        ofType<TryToSavePlaceAction>(TryToSavePlaceAction.type),
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

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly placeService: ApiPlaceService
    ) {}
}
