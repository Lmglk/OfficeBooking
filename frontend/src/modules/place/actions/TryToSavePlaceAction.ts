import { Action } from '@ngrx/store';
import { PlaceParameters } from '../types/PlaceParameters';

export class TryToSavePlaceAction implements Action {
    public static readonly type = '[Room] Try to save place';

    public readonly type = TryToSavePlaceAction.type;

    constructor(public readonly payload: PlaceParameters) {}
}
