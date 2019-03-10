import { Component } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { RoomParameters } from '../../types/RoomParameters';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { TryToSaveRoomAction } from '../../store/actions/TryToSaveRoomAction';

@Component({
    selector: 'ob-add-room-modal-container',
    template: `
        <ob-block name="Create room">
            <div class="grid">
                <ob-add-room-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                ></ob-add-room-modal-content>
                <div class="actions">
                    <ob-button
                        name="Close"
                        (click)="handleClose()"
                        [bordered]="true"
                    ></ob-button>
                    <ob-button name="Add" (click)="handleCreate()"></ob-button>
                </div>
            </div>
        </ob-block>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 40rem;
            }

            .grid {
                display: grid;
                grid-gap: 2rem;
            }

            .actions {
                display: grid;
                grid-auto-flow: column;
                grid-gap: 1rem;
                justify-self: end;
            }
        `,
    ],
})
export class AddRoomModalContainerComponent {
    public parameters: RoomParameters = {
        name: '',
        width: 1,
        height: 1,
        description: '',
    };

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {}

    public handleChange(parameters: RoomParameters) {
        this.parameters = parameters;
    }

    public handleCreate() {
        if (this.parameters.name.trim().length) {
            this.store.dispatch(new TryToSaveRoomAction(this.parameters));
            this.modalService.close();
        } else {
            console.error('Error! You should enter room name.');
        }
    }

    public handleClose() {
        this.modalService.close();
    }
}
