import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class SetTemporaryRoomAction implements Action {
    public static readonly type = '[Room] Set temporary room';

    public readonly type = SetTemporaryRoomAction.type;

    constructor(public readonly payload: Room) {}
}
