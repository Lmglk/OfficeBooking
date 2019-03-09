import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../modal/services/modal.service';
import { AddPlaceModalContainerComponent } from '../../containers/add-place-modal-container/add-place-modal-container.component';

@Component({
    selector: 'ob-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css'],
})
export class RoomComponent {
    constructor(
        private readonly router: Router,
        private readonly modalService: ModalService
    ) {}

    public handleCreatePlace() {
        this.modalService.open(AddPlaceModalContainerComponent);
    }

    public navigateBack() {
        this.router.navigate(['home']);
    }
}
