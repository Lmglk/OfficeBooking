import { createSelector } from '@ngrx/store';
import { selectRooms } from './selectRooms';
import { selectCurrentRoomId } from './selectCurrentRoomId';

export const selectCurrentRoom = createSelector(
    selectRooms,
    selectCurrentRoomId,
    (rooms, selectedRoomId) => {
        const currentRoom = rooms.find(room => selectedRoomId === room.id);
        return currentRoom ? currentRoom : null;
    }
);
