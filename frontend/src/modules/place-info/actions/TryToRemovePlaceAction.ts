import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';

export class TryToRemovePlaceAction implements Action {
    public static readonly type = '[Place] Try to remove';

    public readonly type = TryToRemovePlaceAction.type;

    constructor(public readonly payload: Place) {}
}
