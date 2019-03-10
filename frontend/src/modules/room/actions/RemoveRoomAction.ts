import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class RemoveRoomAction implements Action {
    public static readonly type = '[Room] Remove';

    public readonly type = RemoveRoomAction.type;

    constructor(public readonly payload: Room['id']) {}
}
