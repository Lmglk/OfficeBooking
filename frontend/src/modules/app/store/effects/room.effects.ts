import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToSaveRoomAction } from '../actions/TryToSaveRoomAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiRoomService } from '../../services/api-room.service';
import { AddRoomAction } from '../actions/AddRoomAction';
import { of } from 'rxjs';
import { RejectSaveRoomAction } from '../actions/RejectSaveRoomAction';
import { TryToLoadRoomsAction } from '../actions/TryToLoadRoomsAction';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { RejectLoadRoomAction } from '../actions/RejectLoadRoomAction';
import { TryToRemoveRoomAction } from '../actions/TryToRemoveRoomAction';
import { RejectRemoveRoomAction } from '../actions/RejectRemoveRoomAction';
import { RemoveRoomAction } from '../actions/RemoveRoomAction';

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
        switchMap(action =>
            this.roomService.remove(action.payload).pipe(
                map(() => new RemoveRoomAction(action.payload.id)),
                catchError(() => of(new RejectRemoveRoomAction()))
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly roomService: ApiRoomService
    ) {}
}
