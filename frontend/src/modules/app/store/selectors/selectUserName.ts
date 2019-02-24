import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/AppState';

export const selectUserName = createSelector(
    (state: AppState) => state.userState,
    userState => (userState.user ? userState.user.name : '')
);
