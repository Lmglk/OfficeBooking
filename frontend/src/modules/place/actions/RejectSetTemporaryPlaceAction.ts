import { Action } from '@ngrx/store';

export class RejectSetTemporaryPlaceAction implements Action {
    public static readonly type = '[Place] Set temporary place rejected';

    public readonly type = RejectSetTemporaryPlaceAction.type;
}
