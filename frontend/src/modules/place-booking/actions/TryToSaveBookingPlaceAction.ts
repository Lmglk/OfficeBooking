import { Action } from '@ngrx/store';
import { BookParamters } from '../types/BookParamters';

export class TryToSaveBookingPlaceAction implements Action {
    public static readonly type = '[Booking] Try to save';

    public readonly type = TryToSaveBookingPlaceAction.type;

    constructor(public readonly payload: BookParamters) {}
}
