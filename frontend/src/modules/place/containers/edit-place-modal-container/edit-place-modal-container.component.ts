import { Component, OnDestroy } from '@angular/core';
import { PlaceParameters } from '../../types/PlaceParameters';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { EditPlaceAction } from '../../actions/EditPlaceAction';
import { Subscription } from 'rxjs';
import { selectTemporaryPlace } from '../../selectors/selectTemporaryPlace';
import { Place } from '../../../app/types/Place';
import { SetTemporaryPlaceAction } from '../../actions/SetTemporaryPlaceAction';
import { TryToSaveTemporaryPlaceAction } from '../../actions/TryToSaveTemporaryPlaceAction';
import { ModalService } from '../../../modal/services/modal.service';
import { ResetTemporaryPlaceAction } from '../../actions/ResetTemporaryPlaceAction';
import { selectPlaces } from '../../selectors/selectPlaces';
import { PlaceValidationService } from '../../services/place-validation.service';

@Component({
    selector: 'ob-edit-place-modal-container',
    template: `
        <ob-block name="Edit place">
            <div class="grid">
                <ob-add-place-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                >
                </ob-add-place-modal-content>

                <div class="modal-footer">
                    <div class="error-container">
                        <ob-error [message]="error"></ob-error>
                    </div>

                    <div class="actions">
                        <ob-button
                            name="Close"
                            [bordered]="true"
                            (click)="handleClose()"
                        ></ob-button>
                        <ob-button
                            name="Apply"
                            [disabled]="error"
                            (click)="applyChanges()"
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
export class EditPlaceModalContainerComponent implements OnDestroy {
    public parameters: PlaceParameters;
    public error = '';

    private place: Place;
    private places: Place[];
    private currentPlaceSubscription: Subscription;
    private placesSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService,
        private readonly validationService: PlaceValidationService
    ) {
        this.store.dispatch(new EditPlaceAction());
        this.currentPlaceSubscription = this.store
            .pipe(select(selectTemporaryPlace))
            .subscribe(place => {
                if (place) {
                    this.place = place;
                    this.parameters = {
                        name: place.name,
                        equipments: place.equipments ? place.equipments : [],
                        description: place.description,
                        isAvailableForBooking: place.isAvailableForBooking,
                        x: place.x,
                        y: place.y,
                    };
                }
            });

        this.placesSubscription = this.store
            .pipe(select(selectPlaces))
            .subscribe(places => (this.places = places));
    }

    public handleChange(parameters: PlaceParameters) {
        this.store.dispatch(
            new SetTemporaryPlaceAction({
                ...this.place,
                ...parameters,
            })
        );

        const places = this.places.filter(item => item.id !== this.place.id);
        this.error = this.validationService.validate(parameters, places);
    }

    public applyChanges() {
        this.store.dispatch(new TryToSaveTemporaryPlaceAction(this.place));
        this.modalService.close();
    }

    public handleClose() {
        this.store.dispatch(new ResetTemporaryPlaceAction());
        this.modalService.close();
    }

    public ngOnDestroy(): void {
        this.currentPlaceSubscription.unsubscribe();
        this.placesSubscription.unsubscribe();
    }
}
