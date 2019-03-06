import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../../basic-components/enums/InputType';
import { RegistrationParameters } from '../../types/RegistrationParameters';

@Component({
    selector: 'ob-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
    @Input() parameters: RegistrationParameters;

    @Output() onchange: EventEmitter<
        RegistrationParameters
    > = new EventEmitter();
    @Output() register: EventEmitter<void> = new EventEmitter();

    public readonly inputType = InputType;

    public handleChange(event: Event, fieldName: keyof RegistrationParameters) {
        this.onchange.emit({
            ...this.parameters,
            [fieldName]: (event.target as HTMLInputElement).value,
        });
    }

    public handleRegister() {
        this.register.emit();
    }
}
