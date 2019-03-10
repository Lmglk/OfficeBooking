import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectCurrentRoomId = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.selectedRoomId
);
