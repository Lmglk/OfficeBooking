import { Action } from '@ngrx/store';
import { Person } from '../../types/Person';

export class SetUserAction implements Action {
    public static readonly type = '[Login] Set user';

    public readonly type = SetUserAction.type;

    constructor(public readonly payload: Person) {}
}
