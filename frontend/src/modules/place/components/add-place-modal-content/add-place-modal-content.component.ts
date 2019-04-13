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

    public handleChangeEquipment(value: boolean, equipments: Equipment) {
        const findValue = this.parameters.equipments.find(
            item => item === equipments
        );

        this.onchange.emit({
            ...this.parameters,
            equipments: findValue
                ? this.parameters.equipments.filter(item => item !== equipments)
                : [...this.parameters.equipments, equipments],
        });
    }

    public handleChangePosition(event: Event, field: 'x' | 'y') {
        this.onchange.emit({
            ...this.parameters,
            [field]: (event.target as HTMLInputElement).valueAsNumber - 1,
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
