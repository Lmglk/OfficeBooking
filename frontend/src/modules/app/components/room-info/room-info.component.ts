import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../types/Room';

@Component({
    selector: 'ob-room-info',
    templateUrl: './room-info.component.html',
    styleUrls: ['./room-info.component.css'],
})
export class RoomInfoComponent {
    @Input() room: Room;
    @Input() usedPlaces: number;
    @Input() availablePlacesForBooking: number;

    @Output() remove: EventEmitter<Room> = new EventEmitter();

    public handleRemoveRoom() {
        this.remove.emit(this.room);
    }
}
