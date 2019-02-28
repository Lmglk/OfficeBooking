import { createSelector } from '@ngrx/store';
import { selectCurrentRoom } from './selectCurrentRoom';

export const selectAvailablePlacesForBooking = createSelector(
    selectCurrentRoom,
    room =>
        room
            ? room.placesList.reduce(
                  (acc, curr) => (curr.isAvailableForBooking ? acc + 1 : 0),
                  0
              )
            : 0
);
