import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class UpdateRoomAction implements Action {
    public static readonly type = '[Room] Update';

    public readonly type = UpdateRoomAction.type;

    constructor(public readonly payload: Room) {}
}
