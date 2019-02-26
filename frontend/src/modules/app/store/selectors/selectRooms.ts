import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/AppState';

export const selectRooms = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.rooms
);
