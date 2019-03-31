import { selectBookingList } from './selectBookingList';
import { createSelector } from '@ngrx/store';
import { selectCurrentPlaceId } from '../../place/selectors/selectCurrentPlaceId';

export const selectBookingListByPlace = createSelector(
    selectBookingList,
    selectCurrentPlaceId,
    (bookingList, placeId) =>
        bookingList.filter(booking => booking.place.id === placeId)
);
