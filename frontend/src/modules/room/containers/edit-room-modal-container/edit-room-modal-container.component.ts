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

@Component({
    selector: 'ob-edit-room-modal-container',
    template: `
        <ob-block name="Edit room">
            <div class="grid">
                <ob-add-room-modal-content
                    [parameters]="parameters"
                    (onchange)="handleChange($event)"
                ></ob-add-room-modal-content>
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
export class EditRoomModalContainerComponent implements OnDestroy {
    public parameters: RoomParameters;

    private room: Room;
    private roomSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly modalService: ModalService
    ) {
        this.store.dispatch(new EditRoomAction());
        this.roomSubscription = this.store
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
    }

    public handleChange(parameters: RoomParameters) {
        this.store.dispatch(
            new SetTemporaryRoomAction({
                ...this.room,
                ...parameters,
            })
        );
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
        this.roomSubscription.unsubscribe();
    }
}
