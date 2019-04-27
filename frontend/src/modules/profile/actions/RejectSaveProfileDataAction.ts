import { Action } from '@ngrx/store';

export class RejectSaveProfileDataAction implements Action {
    public static readonly type = '[Profile] Save profile rejected';

    public readonly type = RejectSaveProfileDataAction.type;
}
