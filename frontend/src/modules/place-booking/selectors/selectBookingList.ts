import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectBookingList = createSelector(
    (state: AppState) => state.bookingState,
    bookingState => bookingState.bookingList
);
