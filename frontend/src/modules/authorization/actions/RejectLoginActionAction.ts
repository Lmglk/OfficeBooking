import { Action } from '@ngrx/store';

export class RejectLoginActionAction implements Action {
    public static readonly type = '[Login] Load rejected';

    public readonly type = RejectLoginActionAction.type;
}
