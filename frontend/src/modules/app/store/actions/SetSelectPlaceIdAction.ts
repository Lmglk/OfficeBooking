import { Action } from '@ngrx/store';
import { Place } from '../../types/Place';

export class SetSelectPlaceIdAction implements Action {
    public static readonly type = '[Room] Select place';

    public readonly type = SetSelectPlaceIdAction.type;

    constructor(public readonly payload: Place['id']) {}
}
