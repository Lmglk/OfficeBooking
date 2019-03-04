import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToSaveRoomAction } from '../actions/TryToSaveRoomAction';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from '../../services/room.service';
import { AddRoomAction } from '../actions/AddRoomAction';
import { of } from 'rxjs';
import { RejectSaveRoomAction } from '../actions/RejectSaveRoomAction';
import { TryToLoadRoomsAction } from '../actions/TryToLoadRoomsAction';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { RejectLoadRoom } from '../actions/RejectLoadRoom';

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
                    return of(new RejectLoadRoom());
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

    constructor(
        private readonly actions$: Actions,
        private readonly roomService: RoomService
    ) {}
}
