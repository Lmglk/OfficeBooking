import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../../app/types/Booking';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectBookingListByPlace } from '../selectors/selectBookingListByPlace';

@Component({
    selector: 'ob-pb-list-container',
    template: `
        <ob-pb-list [bookingList]="bookingList$ | async"></ob-pb-list>
    `,
})
export class PbListContainerComponent {
    public bookingList$: Observable<Booking[]>;

    constructor(private readonly store: Store<AppState>) {
        this.bookingList$ = this.store.pipe(select(selectBookingListByPlace));
    }
}
