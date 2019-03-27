import { Component, Input } from '@angular/core';
import { Booking } from '../../../app/types/Booking';

@Component({
    selector: 'ob-pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: ['./pb-list.component.css'],
})
export class PbListComponent {
    @Input() bookingList: Booking[];
}
