import { Action } from '@ngrx/store';
import { RoomParameters } from '../../types/RoomParameters';

export class TryToSaveRoomAction implements Action {
    public static readonly type = '[Room] Try to save';

    public readonly type = TryToSaveRoomAction.type;

    constructor(public readonly payload: RoomParameters) {}
}
