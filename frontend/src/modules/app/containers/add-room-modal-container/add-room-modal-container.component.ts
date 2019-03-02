import { Component } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';

@Component({
    selector: 'ob-add-room-modal-container',
    template: `
        <ob-block name="Add room">
            <div class="grid">
                <ob-add-room-modal-content></ob-add-room-modal-content>
                <div class="actions">
                    <ob-button name="Close" (click)="handleClose()"></ob-button>
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
    constructor(private readonly modalService: ModalService) {}

    public handleCreate() {
        this.modalService.close();
    }

    public handleClose() {
        this.modalService.close();
    }
}
