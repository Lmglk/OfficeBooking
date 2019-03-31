import { createSelector } from '@ngrx/store';
import { selectBookingList } from './selectBookingList';

export const selectBookingListForCurrentDate = createSelector(
    selectBookingList,
    bookingItems =>
        bookingItems.filter(item => {
            const currentDate = new Date().getTime();
            return currentDate >= item.fromDate && currentDate <= item.toDate;
        })
);
