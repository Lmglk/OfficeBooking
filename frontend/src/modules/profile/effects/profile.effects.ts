import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToSaveProfileDataAction } from '../actions/TryToSaveProfileDataAction';
import { AppState } from '../../app/types/AppState';
import { Store, select } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ApiProfileService } from '../services/api-profile.service';
import { selectUser } from '../../app/selectors/selectUser';
import { RejectSaveProfileDataAction } from '../actions/RejectSaveProfileDataAction';
import { NotificationService } from '../../notification/services/notification.service';
import { SetUserAction } from '../../authorization/actions/SetUserAction';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {
    @Effect()
    public saveProfile$ = this.actions$.pipe(
        ofType<TryToSaveProfileDataAction>(TryToSaveProfileDataAction.type),
        withLatestFrom(this.store.pipe(select(selectUser))),
        switchMap(([action, user]) => {
            if (!user) {
                throw new Error('Save profile failed');
            }

            const { name, email, password, confirmPassword } = action.payload;

            if (
                (password.length || confirmPassword.length) &&
                password !== confirmPassword
            ) {
                throw new Error('Save profile failed');
            }

            if (name.trim().length < 1 || email.trim().length < 1) {
                throw new Error('You should pass the correct profile data');
            }

            return this.apiProfile
                .updateProfile({
                    ...user,
                    ...action.payload,
                })
                .pipe(
                    map(() => {
                        this.notification.error('User successfully updated');
                        return new SetUserAction({
                            ...user,
                            name: name,
                            email: email,
                        });
                    }),
                    catchError(() => {
                        this.notification.error('Save profile failed');
                        return of(new RejectSaveProfileDataAction());
                    })
                );
        }),
        catchError(error => {
            this.notification.error(error.message);
            return of(new RejectSaveProfileDataAction());
        })
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly apiProfile: ApiProfileService,
        private readonly notification: NotificationService
    ) {}
}
