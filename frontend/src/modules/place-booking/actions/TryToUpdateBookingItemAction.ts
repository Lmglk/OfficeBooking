import { Action } from '@ngrx/store';
import { Booking } from '../../app/types/Booking';

export class TryToUpdateBookingItemAction implements Action {
    public static readonly type = '[Booking] Try to update';

    public readonly type = TryToUpdateBookingItemAction.type;

    constructor(public readonly payload: Booking) {}
}
