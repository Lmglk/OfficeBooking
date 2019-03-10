import { createSelector } from '@ngrx/store';
import { AppState } from '../types/AppState';

export const selectUser = createSelector(
    (state: AppState) => state.userState,
    userState => userState.user
);
