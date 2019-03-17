import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../app/types/Room';
import { ModalService } from '../../../modal/services/modal.service';
import { EditRoomModalContainerComponent } from '../../containers/edit-room-modal-container/edit-room-modal-container.component';

@Component({
    selector: 'ob-room-info',
    templateUrl: './room-info.component.html',
    styleUrls: ['./room-info.component.css'],
})
export class RoomInfoComponent {
    @Input() room: Room;
    @Input() usedPlaces: number;
    @Input() availablePlacesForBooking: number;

    @Output() remove: EventEmitter<Room> = new EventEmitter();
    @Output() navigateToRoom: EventEmitter<void> = new EventEmitter();

    constructor(private readonly modalService: ModalService) {}

    public handleRemoveRoom() {
        this.remove.emit(this.room);
    }

    public goToRoom() {
        this.navigateToRoom.emit();
    }

    public openEditRoomModal() {
        this.modalService.open(EditRoomModalContainerComponent);
    }
}
