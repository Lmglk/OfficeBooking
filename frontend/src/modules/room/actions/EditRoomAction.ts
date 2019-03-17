import { Action } from '@ngrx/store';

export class EditRoomAction implements Action {
    public static readonly type = '[Room] Edit';

    public readonly type = EditRoomAction.type;
}
