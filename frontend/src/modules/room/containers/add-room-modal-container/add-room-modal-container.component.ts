import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { RoomParameters } from '../../types/RoomParameters';
import { AppState } from '../../../app/types/AppState';
import { Store, select } from '@ngrx/store';
import { TryToSaveRoomAction } from '../../actions/TryToSaveRoomAction';
import { Subscription } from 'rxjs';
import { selectRooms } from '../../selectors/selectRooms';
import { Room } from '../../../app/types/Room';
import { RoomValidationService } from '../../services/room-validation.service';

@Component({
    selector: 'ob-add-room-modal-container',
    template: `
        <ob-block name="Create room">
            <div class="grid">
                <ob-add-room-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                ></ob-add-room-modal-content>

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
export class AddRoomModalContainerComponent implements OnDestroy {
    public parameters: RoomParameters = {
        name: 'New room',
        width: 1,
        height: 1,
        description: '',
    };

    public error = '';

    private rooms: Room[];
    private roomSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService,
        private readonly validationService: RoomValidationService
    ) {
        this.roomSubscription = this.store
            .pipe(select(selectRooms))
            .subscribe(rooms => (this.rooms = rooms));
    }

    public handleChange(parameters: RoomParameters) {
        this.parameters = parameters;

        this.error = this.validationService.validate(parameters, this.rooms);
    }

    public handleCreate() {
        if (this.parameters.name.trim().length) {
            this.store.dispatch(new TryToSaveRoomAction(this.parameters));
            this.modalService.close();
        } else {
            console.error('Error! You should enter place-layout name.');
        }
    }

    public handleClose() {
        this.modalService.close();
    }

    public ngOnDestroy(): void {
        this.roomSubscription.unsubscribe();
    }
}
