import { Action } from '@ngrx/store';

export class RejectSetTemporaryRoomAction implements Action {
    public static readonly type = '[Room] Set temporary room rejected';

    public readonly type = RejectSetTemporaryRoomAction.type;
}
