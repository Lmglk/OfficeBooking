import { Action } from '@ngrx/store';

export class ResetTemporaryPlaceAction implements Action {
    public static readonly type = '[Place] Reset temporary place';

    public readonly type = ResetTemporaryPlaceAction.type;
}
