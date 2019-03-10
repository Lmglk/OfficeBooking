import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectCurrentPlaceId = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.selectedPlaceId
);
