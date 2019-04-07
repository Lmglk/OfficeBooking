import { createSelector } from '@ngrx/store';
import { selectUser } from './selectUser';
import { Role } from '../enums/Role';

export const selectUserRole = createSelector(
    selectUser,
    userState => (userState ? userState.role : Role.USER)
);
