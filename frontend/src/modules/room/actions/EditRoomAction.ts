import { Action } from '@ngrx/store';

export class EditRoomAction implements Action {
    public static readonly type = '[Room] edit room';

    public readonly type = EditRoomAction.type;
}
