import { Injectable } from '@angular/core';
import { BookParamters } from '../types/BookParamters';
import { Booking } from '../../app/types/Booking';

@Injectable({
    providedIn: 'root',
})
export class BookingValidationService {
    public validation(
        parameters: BookParamters,
        bookingList: Booking[]
    ): string {
        if (
            !this.isFutureTime(parameters.fromDate) ||
            !this.isFutureTime(parameters.toDate)
        ) {
            return 'Wrong time interval';
        }

        if (!this.checkInterval(parameters.fromDate, parameters.toDate)) {
            return 'Wrong time interval';
        }

        if (this.checkExistBooking(parameters, bookingList)) {
            return 'Wrong time interval';
        }

        return '';
    }

    private checkInterval(from: Date, to: Date): boolean {
        return from && to && to.getTime() >= from.getTime();
    }

    private checkExistBooking(
        parameters: BookParamters,
        bookingList: Booking[]
    ): boolean {
        return bookingList.some(
            item =>
                this.isDateInInterval(
                    parameters.fromDate.getTime(),
                    item.fromDate,
                    item.toDate
                ) ||
                this.isDateInInterval(
                    parameters.toDate.getTime(),
                    item.fromDate,
                    item.toDate
                ) ||
                (parameters.fromDate.getTime() < item.fromDate &&
                    parameters.toDate.getTime() > item.toDate)
        );
    }

    private isFutureTime(date: Date): boolean {
        return date && date.getTime() >= Date.now();
    }

    private isDateInInterval(
        value: number,
        left: number,
        right: number
    ): boolean {
        return left < value && value < right;
    }
}
