import { Action } from '@ngrx/store';

export class RejectSaveTemporaryPlaceAction implements Action {
    public static readonly type = '[Place] Save temporary place rejected';

    public readonly type = RejectSaveTemporaryPlaceAction.type;
}
