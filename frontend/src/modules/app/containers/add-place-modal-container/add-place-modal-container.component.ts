import { Component } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { PlaceParameters } from '../../types/PlaceParameters';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { TryToSavePlaceAction } from '../../store/actions/TryToSavePlaceAction';

@Component({
    selector: 'ob-add-place-modal-container',
    template: `
        <ob-block name="Create place">
            <div class="grid">
                <ob-add-place-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                ></ob-add-place-modal-content>
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
export class AddPlaceModalContainerComponent {
    public parameters: PlaceParameters = {
        name: '',
        equipment: [],
        description: '',
        isAvailableForBooking: true,
        x: 1,
        y: 1,
    };

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {}

    public handleChange(parameters: PlaceParameters) {
        this.parameters = parameters;
    }

    public handleCreate() {
        this.store.dispatch(new TryToSavePlaceAction(this.parameters));
    }

    public handleClose() {
        this.modalService.close();
    }
}
