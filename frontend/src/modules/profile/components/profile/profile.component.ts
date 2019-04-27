import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../../basic-components/enums/InputType';
import { ProfileParameters } from '../../types/ProfileParameters';

@Component({
    selector: 'ob-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
    public readonly inputType = InputType;

    @Input() public parameters: ProfileParameters;

    @Output() public changeParameters: EventEmitter<
        ProfileParameters
    > = new EventEmitter();

    public handleChange(event: Event, fieldName: keyof ProfileParameters) {
        this.changeParameters.emit({
            ...this.parameters,
            [fieldName]: (event.target as HTMLInputElement).value,
        });
    }
}
