import { Action } from '@ngrx/store';

export class ResetTemporaryRoomAction implements Action {
    public static readonly type = '[Room] Reset temporary room';

    public readonly type = ResetTemporaryRoomAction.type;
}
