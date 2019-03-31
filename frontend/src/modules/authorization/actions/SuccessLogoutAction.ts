import { Action } from '@ngrx/store';

export class SuccessLogoutAction implements Action {
    public static readonly type = '[User] Logout success';

    public readonly type = SuccessLogoutAction.type;
}
