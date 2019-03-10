import { Action } from '@ngrx/store';

export class RejectSavePlaceAction implements Action {
    public static readonly type = '[Room] Save place rejected';

    public readonly type = RejectSavePlaceAction.type;
}
