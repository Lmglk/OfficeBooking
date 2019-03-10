import { Action } from '@ngrx/store';

export class ResetSelectPlaceIdAction implements Action {
    public static readonly type = '[Place] Reset';

    public readonly type = ResetSelectPlaceIdAction.type;
}
