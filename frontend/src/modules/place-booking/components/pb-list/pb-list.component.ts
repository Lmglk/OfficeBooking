import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from '../../../app/types/Booking';
import { Role } from '../../../app/enums/Role';

@Component({
    selector: 'ob-pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: ['./pb-list.component.css'],
})
export class PbListComponent {
    public readonly role = Role;

    @Input() public bookingList: Booking[] = [];
    @Input() public userRole: Role;

    @Output() public update: EventEmitter<Booking> = new EventEmitter();

    public handleUpdateBooking(booking: Booking, status: boolean) {
        this.update.emit({
            ...booking,
            approved: status,
        });
    }

    public getCountColsByRole(role: Role): number {
        return role === Role.ADMIN ? 4 : 3;
    }
}
