import { Component, Input } from '@angular/core';
import { Room } from '../../types/Room';
import { AppState } from '../../types/AppState';
import { Store } from '@ngrx/store';
import { SetSelectRoomIdAction } from '../../store/actions/SetSelectRoomIdAction';

@Component({
    selector: 'ob-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent {
    @Input() rooms: Room[];
    @Input() selectedRoomId: number | null;

    constructor(public readonly store: Store<AppState>) {}

    public handleSelect(id: Room['id']) {
        this.store.dispatch(new SetSelectRoomIdAction(id));
    }
}
