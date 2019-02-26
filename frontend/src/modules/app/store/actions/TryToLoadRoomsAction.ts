import { Action } from '@ngrx/store';

export class TryToLoadRoomsAction implements Action {
    public static readonly type = '[Room] Try to load';

    public readonly type = TryToLoadRoomsAction.type;
}
