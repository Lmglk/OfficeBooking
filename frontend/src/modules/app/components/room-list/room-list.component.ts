import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../types/Room';

@Component({
    selector: 'ob-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent {
    @Input() rooms: Room[];
    @Input() selectedRoomId: number | null;

    @Output() selected: EventEmitter<number | null> = new EventEmitter();

    public handleSelect(id: Room['id']) {
        this.selected.emit(id);
    }
}
