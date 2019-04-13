import { Component, OnDestroy } from '@angular/core';
import { BookParamters } from '../types/BookParamters';
import { AppState } from '../../app/types/AppState';
import { Store, select } from '@ngrx/store';
import { TryToSaveBookingPlaceAction } from '../actions/TryToSaveBookingPlaceAction';
import { Subscription } from 'rxjs';
import { Booking } from '../../app/types/Booking';
import { selectBookingListByPlace } from '../selectors/selectBookingListByPlace';
import { BookingValidationService } from '../servies/booking-validation.service';

@Component({
    selector: 'ob-pb-form-container',
    template: `
        <ob-pb-form
            [parameters]="parameters"
            [error]="error"
            (onchange)="handleChange($event)"
            (submit)="handleSubmit()"
        ></ob-pb-form>
    `,
})
export class PbFormContainerComponent implements OnDestroy {
    public parameters: BookParamters = {
        fromDate: new Date(),
        toDate: new Date(),
        approved: false,
    };

    public error = '';

    private bookingList: Booking[];
    private bookingSubscription: Subscription;

    constructor(
        private readonly store: Store<AppState>,
        private readonly bookingValidationService: BookingValidationService
    ) {
        this.bookingSubscription = this.store
            .pipe(select(selectBookingListByPlace))
            .subscribe(bookingList => (this.bookingList = bookingList));
    }

    public handleChange(parameters: BookParamters) {
        this.parameters = parameters;

        this.error = this.bookingValidationService.validation(
            parameters,
            this.bookingList
        );
    }

    public handleSubmit() {
        this.store.dispatch(new TryToSaveBookingPlaceAction(this.parameters));
    }

    public ngOnDestroy(): void {
        this.bookingSubscription.unsubscribe();
    }
}
