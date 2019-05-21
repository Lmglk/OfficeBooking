import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { PlaceParameters } from '../../types/PlaceParameters';
import { AppState } from '../../../app/types/AppState';
import { Store } from '@ngrx/store';
import { TryToSavePlaceAction } from '../../actions/TryToSavePlaceAction';
import { Subscription } from 'rxjs';
import { select } from '@ngrx/store';
import { PlaceValidationService } from '../../services/place-validation.service';
import { selectCurrentRoom } from '../../../room/selectors/selectCurrentRoom';
import { Room } from '../../../app/types/Room';

@Component({
    selector: 'ob-add-place-modal-container',
    template: `
        <ob-block name="Create place">
            <div class="grid">
                <ob-add-place-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                ></ob-add-place-modal-content>
                <div class="modal-footer">
                    <div class="error-container">
                        <ob-error [message]="error"></ob-error>
                    </div>

                    <div class="actions">
                        <ob-button
                            name="Close"
                            (click)="handleClose()"
                            [bordered]="true"
                        ></ob-button>
                        <ob-button
                            name="Add"
                            [disabled]="error"
                            (click)="handleCreate()"
                        ></ob-button>
                    </div>
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

            .modal-footer {
                display: grid;
                grid-auto-flow: column;
                align-items: center;
                grid-template-columns: 1fr auto;
            }

            .actions {
                display: grid;
                grid-auto-flow: column;
                grid-gap: 1rem;
                justify-self: end;
            }

            .error-container {
                font-size: 1.2rem;
                color: var(--color-text);
            }
        `,
    ],
})
export class AddPlaceModalContainerComponent implements OnDestroy {
    public parameters: PlaceParameters = {
        name: 'New place',
        equipments: [],
        description: '',
        isAvailableForBooking: true,
        x: 0,
        y: 0,
    };

    public error = '';

    private currentRoom: Room;
    private placeSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService,
        private readonly validationService: PlaceValidationService
    ) {
        this.placeSubscription = this.store
            .pipe(select(selectCurrentRoom))
            .subscribe(currentRoom => {
                if (currentRoom) {
                    this.currentRoom = currentRoom;
                }
            });
    }

    public handleChange(parameters: PlaceParameters) {
        this.parameters = parameters;

        this.error = this.validationService.validate(
            parameters,
            this.currentRoom.places,
            this.currentRoom.width,
            this.currentRoom.height
        );
    }

    public handleCreate() {
        this.store.dispatch(new TryToSavePlaceAction(this.parameters));
        this.modalService.close();
    }

    public handleClose() {
        this.modalService.close();
    }

    public ngOnDestroy(): void {
        this.placeSubscription.unsubscribe();
    }
}
