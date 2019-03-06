import { Component } from '@angular/core';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '../../types/Room';
import { selectRooms } from '../../store/selectors/selectRooms';
import { selectCurrentRoomId } from '../../store/selectors/selectCurrentRoomId';
import { SetSelectRoomIdAction } from '../../store/actions/SetSelectRoomIdAction';

@Component({
    selector: 'ob-room-list-container',
    template: `
        <ob-room-list
            [rooms]="rooms$ | async"
            [selectedRoomId]="selectedRoomId$ | async"
            (selected)="selectRoom($event)"
        ></ob-room-list>
    `,
})
export class RoomListContainerComponent {
    public rooms$: Observable<Room[]>;
    public selectedRoomId$: Observable<number | null>;

    constructor(private readonly store: Store<AppState>) {
        this.rooms$ = this.store.pipe(select(selectRooms));
        this.selectedRoomId$ = this.store.pipe(select(selectCurrentRoomId));
    }

    public selectRoom(id: number): void {
        this.store.dispatch(new SetSelectRoomIdAction(id));
    }
}
