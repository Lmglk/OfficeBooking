import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../../basic-components/enums/InputType';
import { LoginParameters } from '../../types/LoginParameters';

@Component({
    selector: 'ob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    @Input() loginParameters: LoginParameters;

    @Output() login: EventEmitter<void> = new EventEmitter();
    @Output() changeParameters: EventEmitter<
        LoginParameters
    > = new EventEmitter();

    public readonly inputType = InputType;

    public handleClick() {
        this.login.emit();
    }

    public handleChange(event: Event, fieldName: keyof LoginParameters) {
        this.changeParameters.emit({
            ...this.loginParameters,
            [fieldName]: (event.target as HTMLInputElement).value,
        });
    }
}
