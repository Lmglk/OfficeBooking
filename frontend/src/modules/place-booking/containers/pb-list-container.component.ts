import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../../app/types/Booking';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectBookingListByPlace } from '../selectors/selectBookingListByPlace';
import { TryToUpdateBookingItemAction } from '../actions/TryToUpdateBookingItemAction';
import { Role } from '../../app/enums/Role';
import { selectUserRole } from '../../app/selectors/selectUserRole';

@Component({
    selector: 'ob-pb-list-container',
    template: `
        <ob-pb-list
            [bookingList]="bookingList$ | async"
            [userRole]="userRole$ | async"
            (update)="updateBooking($event)"
        ></ob-pb-list>
    `,
})
export class PbListContainerComponent {
    public userRole$: Observable<Role>;
    public bookingList$: Observable<Booking[]>;

    constructor(private readonly store: Store<AppState>) {
        this.bookingList$ = this.store.pipe(select(selectBookingListByPlace));
        this.userRole$ = this.store.pipe(select(selectUserRole));
    }

    public updateBooking(booking: Booking) {
        this.store.dispatch(new TryToUpdateBookingItemAction(booking));
    }
}
