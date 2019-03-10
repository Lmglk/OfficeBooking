import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/AppState';

export const selectCurrentPlaceId = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.selectedPlaceId
);
