import { Action } from '@ngrx/store';

export class RejectUserrRegistration implements Action {
    public static readonly type = '[User] Registration rejected';

    public readonly type = RejectUserrRegistration.type;
}
