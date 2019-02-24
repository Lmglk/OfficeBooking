import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToLoginAction } from '../actions/TryToLoginAction';
import { UserService } from '../../services/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RejectLoginAction } from '../actions/RejectLoginAction';
import { of } from 'rxjs';
import { SetUserAction } from '../actions/SetUserAction';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
    @Effect()
    public login$ = this.actions$.pipe(
        ofType<TryToLoginAction>(TryToLoginAction.type),
        switchMap(action => {
            return this.userService.login(action.payload).pipe(
                map(person => {
                    this.router.navigate(['home']);
                    return new SetUserAction(person);
                }),
                catchError(() => {
                    console.error('User load failed');
                    return of(new RejectLoginAction());
                })
            );
        })
    );

    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly userService: UserService
    ) {}
}
