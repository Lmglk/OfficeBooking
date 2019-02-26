import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToLoginAction } from '../actions/TryToLoginAction';
import { UserService } from '../../services/user.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { RejectLoginAction } from '../actions/RejectLoginAction';
import { of } from 'rxjs';
import { SetUserAction } from '../actions/SetUserAction';
import { Router } from '@angular/router';
import { TryToLoadRoomsAction } from '../actions/TryToLoadRoomsAction';
import { RoomService } from '../../services/room.service';
import { SetRoomsAction } from '../actions/SetRoomsAction';
import { RejectLoadRoom } from '../actions/RejectLoadRoom';

@Injectable()
export class UserEffects {
    @Effect()
    public login$ = this.actions$.pipe(
        ofType<TryToLoginAction>(TryToLoginAction.type),
        switchMap(action =>
            this.userService.login(action.payload).pipe(
                mergeMap(person => {
                    this.router.navigate(['home']);
                    return [
                        new SetUserAction(person),
                        new TryToLoadRoomsAction(),
                    ];
                }),
                catchError(() => {
                    console.error('User load failed');
                    return of(new RejectLoginAction());
                })
            )
        )
    );

    @Effect()
    public loadRoom$ = this.actions$.pipe(
        ofType<TryToLoadRoomsAction>(TryToLoadRoomsAction.type),
        switchMap(action =>
            this.roomService.getRoomList().pipe(
                map(rooms => new SetRoomsAction(rooms)),
                catchError(() => {
                    console.error('Room load failed');
                    return of(new RejectLoadRoom());
                })
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly userService: UserService,
        private readonly roomService: RoomService
    ) {}
}
