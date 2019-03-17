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

@Injectable()
export class UserEffects {
    @Effect()
    public register$ = this.actions$.pipe(
        ofType<TryToUserRegister>(TryToUserRegister.type),
        switchMap(action =>
            this.userService.register(action.payload).pipe(
                map(() => new SuccessUserRegistration()),
                catchError(() => of(new RejectUserRegistration()))
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
                    ];
                }),
                catchError(() => {
                    console.error('User load failed');
                    return of(new RejectLoginActionAction());
                })
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly userService: ApiAuthService
    ) {}
}
