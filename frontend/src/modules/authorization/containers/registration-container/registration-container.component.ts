import { Component } from '@angular/core';
import { RegistrationParameters } from '../../types/RegistrationParameters';
import { AppState } from '../../../app/types/AppState';
import { Store } from '@ngrx/store';
import { TryToUserRegister } from '../../actions/TryToUserRegister';

@Component({
    selector: 'ob-registration-container',
    template: `
        <ob-registration
            [parameters]="registrationParameters"
            (onchange)="handleChange($event)"
            (register)="register()"
        ></ob-registration>
    `,
})
export class RegistrationContainerComponent {
    public registrationParameters = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    constructor(public readonly store: Store<AppState>) {}

    public handleChange(parameters: RegistrationParameters): void {
        this.registrationParameters = {
            ...this.registrationParameters,
            ...parameters,
        };
    }

    public register(): void {
        if (!this.isNotEmptyFields(this.registrationParameters)) {
            console.error('Fields should not been empty');
            return;
        }

        if (
            this.registrationParameters.password !==
            this.registrationParameters.confirmPassword
        ) {
            console.error('Passwords is not equal');
            return;
        }

        this.store.dispatch(new TryToUserRegister(this.registrationParameters));
    }

    private isNotEmptyFields(obj: Object): boolean {
        return Object.values(obj).every(value => !!value.trim().length);
    }
}
