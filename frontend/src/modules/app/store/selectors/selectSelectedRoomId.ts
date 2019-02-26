import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/AppState';

export const selectSelectedRoomId = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.selectedRoomId
);
