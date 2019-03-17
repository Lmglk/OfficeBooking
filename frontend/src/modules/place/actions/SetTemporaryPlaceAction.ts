import { Action } from '@ngrx/store';
import { Place } from '../../app/types/Place';

export class SetTemporaryPlaceAction implements Action {
    public static readonly type = '[Place] set temporary place';

    public readonly type = SetTemporaryPlaceAction.type;

    constructor(public readonly payload: Place) {}
}
