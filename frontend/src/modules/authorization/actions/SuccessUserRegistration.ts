import { Action } from '@ngrx/store';

export class SuccessUserRegistration implements Action {
    public static readonly type = '[User] Registration success';

    public readonly type = SuccessUserRegistration.type;
}
