import { Action } from '@ngrx/store';
import { User } from '../../app/types/User';

export class SetUserAction implements Action {
    public static readonly type = '[Login] Set user';

    public readonly type = SetUserAction.type;

    constructor(public readonly payload: User) {}
}
