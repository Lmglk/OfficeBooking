import { createSelector } from '@ngrx/store';
import { selectUser } from './selectUser';

export const selectUserName = createSelector(
    selectUser,
    user => (user ? user.name : '')
);
