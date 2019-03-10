import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '../../../app/types/Room';
import { selectRooms } from '../../selectors/selectRooms';
import { selectCurrentRoomId } from '../../selectors/selectCurrentRoomId';
import { SetSelectRoomIdAction } from '../../actions/SetSelectRoomIdAction';

@Component({
    selector: 'ob-room-list-container',
    template: `
        <ob-list
            [data]="rooms$ | async"
            [bindField]="'name'"
            [selectedValueId]="selectedRoomId$ | async"
            (selected)="selectRoom($event)"
        ></ob-list>
    `,
    styles: [
        `
            :host {
                overflow: hidden;
            }
        `,
    ],
})
export class RoomListContainerComponent {
    public rooms$: Observable<Room[]>;
    public selectedRoomId$: Observable<number | null>;

    constructor(private readonly store: Store<AppState>) {
        this.rooms$ = this.store.pipe(select(selectRooms));
        this.selectedRoomId$ = this.store.pipe(select(selectCurrentRoomId));
    }

    public selectRoom(room: Room): void {
        this.store.dispatch(new SetSelectRoomIdAction(room.id));
    }
}
