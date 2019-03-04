import { createSelector } from '@ngrx/store';
import { selectCurrentRoom } from './selectCurrentRoom';

export const selectUsedPlaces = createSelector(
    selectCurrentRoom,
    room =>
        room
            ? room.places.reduce(
                  (acc, curr) => (curr.isUsed ? acc + 1 : acc),
                  0
              )
            : 0
);
