import { Action } from '@ngrx/store';

export class ResetUserAction implements Action {
    public static readonly type = '[Login] Reset user';

    public readonly type = ResetUserAction.type;
}
