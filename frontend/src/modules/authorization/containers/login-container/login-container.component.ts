import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/types/AppState';
import { TryToLoginAction } from '../../actions/TryToLoginAction';
import { LoginParameters } from '../../types/LoginParameters';

@Component({
    selector: 'ob-login-container',
    template: `
        <ob-login
            [loginParameters]="loginData"
            (changeParameters)="changeParameters($event)"
            (login)="login()"
        ></ob-login>
    `,
})
export class LoginContainerComponent {
    public loginData = {
        email: '',
        password: '',
    };

    constructor(public readonly store: Store<AppState>) {}

    public login() {
        if (this.loginData.email && this.loginData.password) {
            this.store.dispatch(new TryToLoginAction(this.loginData));
        }
    }

    public changeParameters(parameters: LoginParameters) {
        this.loginData = parameters;
    }
}
