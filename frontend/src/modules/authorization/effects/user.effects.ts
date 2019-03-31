import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToLoginAction } from '../actions/TryToLoginAction';
import { ApiAuthService } from '../services/api-auth.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { RejectLoginActionAction } from '../actions/RejectLoginActionAction';
import { of } from 'rxjs';
import { SetUserAction } from '../actions/SetUserAction';
import { Router } from '@angular/router';
import { TryToLoadRoomsAction } from '../../room/actions/TryToLoadRoomsAction';
import { TryToUserRegister } from '../actions/TryToUserRegister';
import { SuccessUserRegistration } from '../actions/SuccessUserRegistration';
import { RejectUserRegistration } from '../actions/RejectUserRegistration';
import { TryToLoadAllBookingPlaceAction } from '../../place-booking/actions/TryToLoadAllBookingPlaceAction';
import { NotificationService } from '../../notification/services/notification.service';
import { LogoutAction } from '../actions/LogoutAction';
import { SuccessLogoutAction } from '../actions/SuccessLogoutAction';
import { ResetUserAction } from '../actions/ResetUserAction';
import { ResetSelectPlaceIdAction } from '../../place/actions/ResetSelectPlaceIdAction';
import { ResetSelectRoomIdAction } from '../../room/actions/ResetSelectRoomIdAction';
import { ResetRoomsAction } from '../../room/actions/ResetRoomsAction';
import { ResetBookingListAction } from '../../place-booking/actions/ResetBookingListAction';

@Injectable()
export class UserEffects {
    @Effect()
    public register$ = this.actions$.pipe(
        ofType<TryToUserRegister>(TryToUserRegister.type),
        switchMap(action =>
            this.userService.register(action.payload).pipe(
                map(() => {
                    this.notification.success('User registered successfully');
                    this.router.navigate(['login']);
                    return new SuccessUserRegistration();
                }),
                catchError(() => {
                    this.notification.error('Failed to register user');
                    return of(new RejectUserRegistration());
                })
            )
        )
    );

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
                        new TryToLoadAllBookingPlaceAction(),
                    ];
                }),
                catchError(() => {
                    this.notification.error('Access denied');
                    return of(new RejectLoginActionAction());
                })
            )
        )
    );

    @Effect()
    public logout$ = this.actions$.pipe(
        ofType(LogoutAction.type),
        mergeMap(() => {
            this.router.navigate(['login']);
            return [
                new ResetUserAction(),
                new ResetSelectPlaceIdAction(),
                new ResetSelectRoomIdAction(),
                new ResetRoomsAction(),
                new ResetBookingListAction(),
                new SuccessLogoutAction(),
            ];
        })
    );

    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly userService: ApiAuthService,
        private readonly notification: NotificationService
    ) {}
}
