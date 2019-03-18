import { Action } from '@ngrx/store';

export class EditPlaceAction implements Action {
    public static readonly type = '[Place] Edit';

    public readonly type = EditPlaceAction.type;
}
