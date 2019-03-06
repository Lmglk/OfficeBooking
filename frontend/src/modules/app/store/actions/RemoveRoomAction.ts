import { Action } from '@ngrx/store';
import { Room } from '../../types/Room';

export class RemoveRoomAction implements Action {
    public static readonly type = '[Room] remove';

    public readonly type = RemoveRoomAction.type;

    constructor(public readonly payload: Room['id']) {}
}
