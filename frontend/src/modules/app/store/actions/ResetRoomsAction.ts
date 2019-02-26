import { Action } from '@ngrx/store';

export class ResetRoomsAction implements Action {
    public static readonly type = '[Room] reset';

    public readonly type = ResetRoomsAction.type;
}
