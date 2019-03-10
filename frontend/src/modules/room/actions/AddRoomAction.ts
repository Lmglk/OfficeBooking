import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class AddRoomAction implements Action {
    public static readonly type = '[Room] Add';

    public readonly type = AddRoomAction.type;

    constructor(public readonly payload: Room) {}
}
