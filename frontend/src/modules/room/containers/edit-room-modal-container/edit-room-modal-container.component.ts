import { Component, OnDestroy } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { EditRoomAction } from '../../actions/EditRoomAction';
import { ModalService } from '../../../modal/services/modal.service';
import { Subscription } from 'rxjs';
import { selectTemporaryRoom } from '../../selectors/selectTemporaryRoom';
import { Room } from '../../../app/types/Room';
import { RoomParameters } from '../../types/RoomParameters';
import { ResetTemporaryRoomAction } from '../../actions/ResetTemporaryRoomAction';
import { SetTemporaryRoomAction } from '../../actions/SetTemporaryRoomAction';
import { TryToSaveTemporaryRoomAction } from '../../actions/TryToSaveTemporaryRoomAction';
import { selectRooms } from '../../selectors/selectRooms';
import { RoomValidationService } from '../../services/room-validation.service';

@Component({
    selector: 'ob-edit-room-modal-container',
    template: `
        <ob-block name="Edit room">
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
export class EditRoomModalContainerComponent implements OnDestroy {
    public parameters: RoomParameters;
    public error = '';

    private room: Room;
    private rooms: Room[];
    private currentRoomSubscription: Subscription;
    private roomsSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService,
        private readonly validationService: RoomValidationService
    ) {
        this.store.dispatch(new EditRoomAction());
        this.currentRoomSubscription = this.store
            .pipe(select(selectTemporaryRoom))
            .subscribe(room => {
                if (room) {
                    this.room = room;
                    this.parameters = {
                        name: room.name,
                        width: room.width,
                        height: room.height,
                        description: room.description,
                    };
                }
            });

        this.roomsSubscription = this.store
            .pipe(select(selectRooms))
            .subscribe(rooms => (this.rooms = rooms));
    }

    public handleChange(parameters: RoomParameters) {
        this.store.dispatch(
            new SetTemporaryRoomAction({
                ...this.room,
                ...parameters,
            })
        );

        this.error = this.validationService.validate(parameters, this.rooms);
    }

    public applyChanges() {
        this.store.dispatch(new TryToSaveTemporaryRoomAction(this.room));
        this.modalService.close();
    }

    public handleClose() {
        this.store.dispatch(new ResetTemporaryRoomAction());
        this.modalService.close();
    }

    public ngOnDestroy(): void {
        this.currentRoomSubscription.unsubscribe();
        this.roomsSubscription.unsubscribe();
    }
}
