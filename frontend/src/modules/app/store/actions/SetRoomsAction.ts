import { Action } from '@ngrx/store';
import { Room } from '../../types/Room';

export class SetRoomsAction implements Action {
    public static readonly type = '[Room] Set';

    public readonly type = SetRoomsAction.type;

    constructor(public readonly payload: Room[]) {}
}
