import { Action } from '@ngrx/store';

export class RejectRemoveRoomAction implements Action {
    public static readonly type = '[Room] Remove rejected';

    public readonly type = RejectRemoveRoomAction.type;
}
