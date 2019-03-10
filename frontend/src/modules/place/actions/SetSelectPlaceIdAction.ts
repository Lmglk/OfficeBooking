import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';

export class SetSelectPlaceIdAction implements Action {
    public static readonly type = '[Place] Select';

    public readonly type = SetSelectPlaceIdAction.type;

    constructor(public readonly payload: Place['id']) {}
}
