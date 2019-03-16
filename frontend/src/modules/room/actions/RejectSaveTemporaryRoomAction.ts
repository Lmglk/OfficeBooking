import { Action } from '@ngrx/store';

export class RejectSaveTemporaryRoomAction implements Action {
    public static readonly type = '[Room] Save temporary room rejected';

    public readonly type = RejectSaveTemporaryRoomAction.type;
}
