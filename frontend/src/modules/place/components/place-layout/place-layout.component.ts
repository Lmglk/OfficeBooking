import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../modal/services/modal.service';
import { AddPlaceModalContainerComponent } from '../../containers/add-place-modal-container/add-place-modal-container.component';

@Component({
    selector: 'ob-place-layout',
    templateUrl: './place-layout.component.html',
    styleUrls: ['./place-layout.component.css'],
})
export class PlaceLayoutComponent {
    constructor(
        private readonly router: Router,
        private readonly modalService: ModalService
    ) {}

    public handleCreatePlace() {
        this.modalService.open(AddPlaceModalContainerComponent);
    }

    public navigateBack() {
        this.router.navigate(['room-layout']);
    }
}
