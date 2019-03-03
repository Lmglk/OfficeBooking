import { Action } from '@ngrx/store';

export class RejectSaveRoomAction implements Action {
    public static readonly type = '[Room] Save rejected';

    public readonly type = RejectSaveRoomAction.type;
}
