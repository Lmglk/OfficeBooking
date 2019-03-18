import { createSelector } from '@ngrx/store';
import { AppState } from '../../app/types/AppState';

export const selectTemporaryRoom = createSelector(
    (state: AppState) => state.roomState,
    roomState => roomState.temporaryRoom
);
