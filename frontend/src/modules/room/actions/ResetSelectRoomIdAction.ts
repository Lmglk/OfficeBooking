import { Action } from '@ngrx/store';

export class ResetSelectRoomIdAction implements Action {
    public static readonly type = '[Room] Reset';

    public readonly type = ResetSelectRoomIdAction.type;
}
