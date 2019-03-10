import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class TryToRemoveRoomAction implements Action {
    public static readonly type = '[Room] Try to remove';

    public readonly type = TryToRemoveRoomAction.type;

    constructor(public readonly payload: Room) {}
}
