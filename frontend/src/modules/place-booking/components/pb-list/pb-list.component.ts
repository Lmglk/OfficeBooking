import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from '../../../app/types/Booking';

@Component({
    selector: 'ob-pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: ['./pb-list.component.css'],
})
export class PbListComponent {
    @Input() bookingList: Booking[] = [];

    @Output() update: EventEmitter<Booking> = new EventEmitter();

    public handleUpdateBooking(booking: Booking, status: boolean) {
        this.update.emit({
            ...booking,
            approved: status,
        });
    }
}
