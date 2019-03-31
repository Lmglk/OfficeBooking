import { Action } from '@ngrx/store';

export class LogoutAction implements Action {
    public static readonly type = '[User] Logout';

    public readonly type = LogoutAction.type;
}
