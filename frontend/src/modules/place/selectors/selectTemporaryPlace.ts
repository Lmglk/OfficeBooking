import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectTemporaryPlace = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.temporaryPlace
);
