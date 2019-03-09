import { Action } from '@ngrx/store';

export class RejectUserRegistration implements Action {
    public static readonly type = '[User] Registration rejected';

    public readonly type = RejectUserRegistration.type;
}
