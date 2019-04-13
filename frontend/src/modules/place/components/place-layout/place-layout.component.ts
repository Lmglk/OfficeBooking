import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../modal/services/modal.service';
import { AddPlaceModalContainerComponent } from '../../containers/add-place-modal-container/add-place-modal-container.component';
import { Role } from '../../../app/enums/Role';
import { Observable } from 'rxjs';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectUserRole } from '../../../app/selectors/selectUserRole';

@Component({
    selector: 'ob-place-layout',
    templateUrl: './place-layout.component.html',
    styleUrls: ['./place-layout.component.css'],
})
export class PlaceLayoutComponent {
    public readonly role = Role;

    public userRole$: Observable<Role>;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router,
        private readonly modalService: ModalService
    ) {
        this.userRole$ = this.store.pipe(select(selectUserRole));
    }

    public handleCreatePlace() {
        this.modalService.open(AddPlaceModalContainerComponent);
    }

    public navigateBack() {
        this.router.navigate(['home']);
    }
}
