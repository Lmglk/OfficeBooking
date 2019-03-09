import { Action } from '@ngrx/store';

export class ResetSelectPlaceIdAction implements Action {
    public static readonly type = '[Room] Reset selected place';

    public readonly type = ResetSelectPlaceIdAction.type;
}
