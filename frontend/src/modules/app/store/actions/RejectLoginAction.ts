import { Action } from '@ngrx/store';

export class RejectLoginAction implements Action {
    public static readonly type = '[Login] Load rejected';

    public readonly type = RejectLoginAction.type;
}
