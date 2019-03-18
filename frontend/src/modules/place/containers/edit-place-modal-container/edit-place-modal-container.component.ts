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
                <div class="actions">
                    <ob-button
                        name="Close"
                        [bordered]="true"
                        (click)="handleClose()"
                    ></ob-button>
                    <ob-button
                        name="Apply"
                        (click)="applyChanges()"
                    ></ob-button>
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
export class EditPlaceModalContainerComponent implements OnDestroy {
    public parameters: PlaceParameters;

    private place: Place;
    private placeSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {
        this.store.dispatch(new EditPlaceAction());
        this.placeSubscription = this.store
            .pipe(select(selectTemporaryPlace))
            .subscribe(place => {
                if (place) {
                    this.place = place;
                    this.parameters = {
                        name: place.name,
                        equipment: place.equipment ? place.equipment : [],
                        description: place.description,
                        isAvailableForBooking: place.isAvailableForBooking,
                        x: place.x,
                        y: place.y,
                    };
                }
            });
    }

    public handleChange(parameters: PlaceParameters) {
        this.store.dispatch(
            new SetTemporaryPlaceAction({
                ...this.place,
                ...parameters,
            })
        );
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
        this.placeSubscription.unsubscribe();
    }
}
