import { Action } from '@ngrx/store';

export class RejectLoadRoomAction implements Action {
    public static readonly type = '[Room] Load rejected';

    public readonly type = RejectLoadRoomAction.type;
}
