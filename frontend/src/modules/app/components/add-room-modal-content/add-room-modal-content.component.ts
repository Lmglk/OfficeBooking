import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomParameters } from '../../types/RoomParameters';
import { InputType } from '../../../basic-components/enums/InputType';

@Component({
    selector: 'ob-add-room-modal-content',
    templateUrl: './add-room-modal-content.component.html',
    styleUrls: ['./add-room-modal-content.component.css'],
})
export class AddRoomModalContentComponent {
    @Input() parameters: RoomParameters;

    @Output() onchange: EventEmitter<RoomParameters> = new EventEmitter();

    public readonly inputType = InputType;

    public handleNameChange(event: Event) {
        this.onchange.emit({
            ...this.parameters,
            name: (event.target as HTMLInputElement).value,
        });
    }

    public handleWidthChange(event: Event) {
        const value = (event.target as HTMLInputElement).valueAsNumber;
        this.onchange.emit({
            ...this.parameters,
            width: isNaN(value) ? 0 : value,
        });
    }

    public handleHeightChange(event: Event) {
        const value = (event.target as HTMLInputElement).valueAsNumber;
        this.onchange.emit({
            ...this.parameters,
            height: isNaN(value) ? 0 : value,
        });
    }

    public handleDescriptionChange(event: Event) {
        this.onchange.emit({
            ...this.parameters,
            description: (event.target as HTMLTextAreaElement).value,
        });
    }
}
