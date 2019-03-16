import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class TryToSaveTemporaryRoomAction implements Action {
    public static readonly type = '[Room] Try to save temporary room';

    public readonly type = TryToSaveTemporaryRoomAction.type;

    constructor(public readonly payload: Room) {}
}
