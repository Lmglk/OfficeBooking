import { Component } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { AddRoomModalContainerComponent } from '../../containers/add-room-modal-container/add-room-modal-container.component';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Role } from '../../../app/enums/Role';
import { Observable } from 'rxjs';
import { selectUserRole } from '../../../app/selectors/selectUserRole';

@Component({
    selector: 'ob-room',
    templateUrl: './room-layout.component.html',
    styleUrls: ['./room-layout.component.css'],
})
export class RoomLayoutComponent {
    public readonly role = Role;

    public userRole$: Observable<Role>;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {
        this.userRole$ = this.store.pipe(select(selectUserRole));
    }

    public handleCreateRoom() {
        this.modalService.open(AddRoomModalContainerComponent);
    }
}
