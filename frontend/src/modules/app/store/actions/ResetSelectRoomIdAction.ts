import { Action } from '@ngrx/store';

export class ResetSelectRoomIdAction implements Action {
    public static readonly type = '[Room] Reset selected room';

    public readonly type = ResetSelectRoomIdAction.type;
}
