import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../app/types/Room';
import { ModalService } from '../../../modal/services/modal.service';
import { EditRoomModalContainerComponent } from '../../containers/edit-room-modal-container/edit-room-modal-container.component';
import { Role } from '../../../app/enums/Role';

@Component({
    selector: 'ob-room-info',
    templateUrl: './room-info.component.html',
    styleUrls: ['./room-info.component.css'],
})
export class RoomInfoComponent {
    public readonly role = Role;

    @Input() public room: Room;
    @Input() public usedPlaces: number;
    @Input() public availablePlacesForBooking: number;
    @Input() public userRole: Role;

    @Output() public remove: EventEmitter<Room> = new EventEmitter();
    @Output() public navigateToRoom: EventEmitter<void> = new EventEmitter();

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
