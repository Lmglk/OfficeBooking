import { Component } from '@angular/core';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { TryToLoginAction } from '../../store/actions/TryToLoginAction';
import { InputType } from '../../../basic-components/enums/InputType';

interface LoginData {
    email: string;
    password: string;
}

@Component({
    selector: 'ob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public readonly inputType = InputType;

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

    public handleChange(event: Event, fieldName: keyof LoginData) {
        this.loginData = {
            ...this.loginData,
            [fieldName]: (event.target as HTMLInputElement).value,
        };
    }
}
