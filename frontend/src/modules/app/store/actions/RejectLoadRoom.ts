import { Action } from '@ngrx/store';

export class RejectLoadRoom implements Action {
    public static readonly type = '[Room] Load rejected';

    public readonly type = RejectLoadRoom.type;
}
