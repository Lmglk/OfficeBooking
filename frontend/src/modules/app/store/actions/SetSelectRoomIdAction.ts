import { Action } from '@ngrx/store';

export class SetSelectRoomIdAction implements Action {
    public static readonly type = '[Room] Select';

    public readonly type = SetSelectRoomIdAction.type;

    constructor(public readonly payload: number) {}
}
