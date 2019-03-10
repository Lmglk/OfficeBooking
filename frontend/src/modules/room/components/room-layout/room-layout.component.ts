import { Component } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { AddRoomModalContainerComponent } from '../../containers/add-room-modal-container/add-room-modal-container.component';

@Component({
    selector: 'ob-home',
    templateUrl: './room-layout.component.html',
    styleUrls: ['./room-layout.component.css'],
})
export class RoomLayoutComponent {
    constructor(public readonly modalService: ModalService) {}

    public handleCreateRoom() {
        this.modalService.open(AddRoomModalContainerComponent);
    }
}
