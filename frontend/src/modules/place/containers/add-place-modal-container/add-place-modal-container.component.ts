import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { PlaceParameters } from '../../types/PlaceParameters';
import { AppState } from '../../../app/types/AppState';
import { Store } from '@ngrx/store';
import { TryToSavePlaceAction } from '../../actions/TryToSavePlaceAction';
import { Place } from '../../../app/types/Place';
import { Subscription } from 'rxjs';
import { selectPlaces } from '../../selectors/selectPlaces';
import { select } from '@ngrx/store';

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
        name: '',
        equipments: [],
        description: '',
        isAvailableForBooking: true,
        x: 0,
        y: 0,
    };

    public error = '';

    private places: Place[];

    private placeSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {
        this.placeSubscription = this.store
            .pipe(select(selectPlaces))
            .subscribe(places => (this.places = places));
    }

    public handleChange(parameters: PlaceParameters) {
        if (this.checkPlaceName(parameters.name)) {
            this.error = 'Place with same name already exist';
            return;
        }

        if (this.checkCoordinates(parameters.x, parameters.y)) {
            this.error = 'Place with same coordinated already exist';
            return;
        }

        this.error = '';
        this.parameters = parameters;
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

    private checkPlaceName(name: string): boolean {
        return this.places.some(item => item.name === name);
    }

    private checkCoordinates(x: number, y: number): boolean {
        return this.places.some(item => item.x === x && item.y === y);
    }
}
