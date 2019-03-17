import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToSaveRoomAction } from '../actions/TryToSaveRoomAction';
import {
    catchError,
    debounceTime,
    map,
    mergeMap,
    switchMap,
    withLatestFrom,
} from 'rxjs/operators';
import { ApiRoomService } from '../services/api-room.service';
import { AddRoomAction } from '../actions/AddRoomAction';
import { of } from 'rxjs';
import { RejectSaveRoomAction } from '../actions/RejectSaveRoomAction';
import { TryToLoadRoomsAction } from '../actions/TryToLoadRoomsAction';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { RejectLoadRoomAction } from '../actions/RejectLoadRoomAction';
import { TryToRemoveRoomAction } from '../actions/TryToRemoveRoomAction';
import { RejectRemoveRoomAction } from '../actions/RejectRemoveRoomAction';
import { RemoveRoomAction } from '../actions/RemoveRoomAction';
import { EditRoomAction } from '../actions/EditRoomAction';
import { selectCurrentRoom } from '../selectors/selectCurrentRoom';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { SetTemporaryRoomAction } from '../actions/SetTemporaryRoomAction';
import { RejectSetTemporaryRoomAction } from '../actions/RejectSetTemporaryRoomAction';
import { TryToSaveTemporaryRoomAction } from '../actions/TryToSaveTemporaryRoomAction';
import { UpdateRoomAction } from '../actions/UpdateRoomAction';
import { RejectSaveTemporaryRoomAction } from '../actions/RejectSaveTemporaryRoomAction';
import { ResetTemporaryRoomAction } from '../actions/ResetTemporaryRoomAction';

@Injectable()
export class RoomEffects {
    @Effect()
    public loadRoom$ = this.actions$.pipe(
        ofType<TryToLoadRoomsAction>(TryToLoadRoomsAction.type),
        switchMap(() =>
            this.roomService.getRoomList().pipe(
                map(rooms => new SetRoomsAction(rooms)),
                catchError(() => {
                    console.error('Room load failed');
                    return of(new RejectLoadRoomAction());
                })
            )
        )
    );

    @Effect()
    public saveRoom$ = this.actions$.pipe(
        ofType<TryToSaveRoomAction>(TryToSaveRoomAction.type),
        debounceTime(500),
        switchMap(action =>
            this.roomService.save(action.payload).pipe(
                map(room => new AddRoomAction(room)),
                catchError(() => of(new RejectSaveRoomAction()))
            )
        )
    );

    @Effect()
    public removeRoom$ = this.actions$.pipe(
        ofType<TryToRemoveRoomAction>(TryToRemoveRoomAction.type),
        debounceTime(500),
        switchMap(action =>
            this.roomService.remove(action.payload).pipe(
                map(() => new RemoveRoomAction(action.payload.id)),
                catchError(() => of(new RejectRemoveRoomAction()))
            )
        )
    );

    @Effect()
    public setTemporaryRoom$ = this.actions$.pipe(
        ofType<EditRoomAction>(EditRoomAction.type),
        withLatestFrom(this.store.pipe(select(selectCurrentRoom))),
        map(([aciton, room]) => {
            if (!room) {
                throw new Error('Room is not selected');
            }

            return new SetTemporaryRoomAction(room);
        }),
        catchError(error => {
            console.error(error);
            return of(new RejectSetTemporaryRoomAction());
        })
    );

    @Effect()
    public updateRoom$ = this.actions$.pipe(
        ofType<TryToSaveTemporaryRoomAction>(TryToSaveTemporaryRoomAction.type),
        debounceTime(500),
        switchMap(action =>
            this.roomService.update(action.payload).pipe(
                mergeMap(room => [
                    new UpdateRoomAction(room),
                    new ResetTemporaryRoomAction(),
                ]),
                catchError(() =>
                    of([
                        new ResetTemporaryRoomAction(),
                        new RejectSaveTemporaryRoomAction(),
                    ])
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly roomService: ApiRoomService
    ) {}
}
