import { Action } from '@ngrx/store';
import { Room } from '../../app/types/Room';

export class SetSelectRoomIdAction implements Action {
    public static readonly type = '[Room] Select';

    public readonly type = SetSelectRoomIdAction.type;

    constructor(public readonly payload: Room['id']) {}
}
