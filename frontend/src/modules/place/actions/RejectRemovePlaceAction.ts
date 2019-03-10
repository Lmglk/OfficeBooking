import { Action } from '@ngrx/store';

export class RejectRemovePlaceAction implements Action {
    public static readonly type = '[Place] Remove rejected';

    public readonly type = RejectRemovePlaceAction.type;
}
