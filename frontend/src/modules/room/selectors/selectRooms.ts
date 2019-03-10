import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectRooms = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.rooms
);
