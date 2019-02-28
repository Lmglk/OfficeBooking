import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/AppState';

export const selectCurrentRoomId = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.selectedRoomId
);
