import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from '../../../app/types/Place';
import { ModalService } from '../../../modal/services/modal.service';
import { EditPlaceModalContainerComponent } from '../../containers/edit-place-modal-container/edit-place-modal-container.component';

@Component({
    selector: 'ob-place-info',
    templateUrl: './place-info.component.html',
    styleUrls: ['./place-info.component.css'],
})
export class PlaceInfoComponent {
    @Input() place: Place;

    @Output() remove: EventEmitter<Place> = new EventEmitter();

    constructor(private readonly modalService: ModalService) {}

    public handleRemovePlace() {
        this.remove.emit(this.place);
    }

    public openEditPlaceModal() {
        this.modalService.open(EditPlaceModalContainerComponent);
    }
}
