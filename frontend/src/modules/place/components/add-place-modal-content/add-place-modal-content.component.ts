import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlaceParameters } from '../../types/PlaceParameters';
import { InputType } from '../../../basic-components/enums/InputType';
import { Equipment } from '../../../app/enums/Equipment';

@Component({
    selector: 'ob-add-place-modal-content',
    templateUrl: './add-place-modal-content.component.html',
    styleUrls: ['./add-place-modal-content.component.css'],
})
export class AddPlaceModalContentComponent {
    @Input() parameters: PlaceParameters;

    @Output() onchange: EventEmitter<PlaceParameters> = new EventEmitter();

    public readonly inputType = InputType;
    public readonly equipment = Equipment;

    public handleChangeName(event: Event) {
        this.onchange.emit({
            ...this.parameters,
            name: (event.target as HTMLInputElement).value,
        });
    }

    public handleChangeEquipment(value: boolean, equipment: Equipment) {
        const findValue = this.parameters.equipment.find(
            item => item === equipment
        );

        this.onchange.emit({
            ...this.parameters,
            equipment: findValue
                ? this.parameters.equipment.filter(item => item !== equipment)
                : [...this.parameters.equipment, equipment],
        });
    }

    public handleChangePosition(event: Event, field: 'x' | 'y') {
        this.onchange.emit({
            ...this.parameters,
            [field]: (event.target as HTMLInputElement).valueAsNumber,
        });
    }

    public handleChangeAvailableForBooking(value: boolean) {
        this.onchange.emit({
            ...this.parameters,
            isAvailableForBooking: value,
        });
    }

    public handleChangeDescription(event: Event) {
        this.onchange.emit({
            ...this.parameters,
            description: (event.target as HTMLTextAreaElement).value,
        });
    }
}
