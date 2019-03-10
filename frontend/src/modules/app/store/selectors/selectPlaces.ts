import { createSelector } from '@ngrx/store';
import { selectCurrentRoom } from './selectCurrentRoom';

export const selectPlaces = createSelector(
    selectCurrentRoom,
    currentRoom => (currentRoom ? currentRoom.places : [])
);
