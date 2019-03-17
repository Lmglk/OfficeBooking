import { createSelector } from '@ngrx/store';
import { selectCurrentRoom } from './selectCurrentRoom';

export const selectAvailablePlacesForBooking = createSelector(
    selectCurrentRoom,
    room =>
        room
            ? room.places.reduce(
                  (acc, curr) => (curr.isAvailableForBooking ? acc + 1 : acc),
                  0
              )
            : 0
);
