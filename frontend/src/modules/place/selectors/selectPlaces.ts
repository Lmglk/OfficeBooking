import { createSelector } from '@ngrx/store';
import { selectCurrentRoom } from '../../room/selectors/selectCurrentRoom';

export const selectPlaces = createSelector(
    selectCurrentRoom,
    currentRoom => (currentRoom ? currentRoom.places : [])
);
