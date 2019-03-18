import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';

export class TryToSaveTemporaryPlaceAction implements Action {
    public static readonly type = '[Place] Try to save temporary place';

    public readonly type = TryToSaveTemporaryPlaceAction.type;

    constructor(public readonly payload: Place) {}
}
