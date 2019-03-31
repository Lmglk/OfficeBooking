import { createSelector } from '@ngrx/store';
import { selectUser } from './selectUser';

export const selectUserId = createSelector(
    selectUser,
    user => (user ? user.id : null)
);
