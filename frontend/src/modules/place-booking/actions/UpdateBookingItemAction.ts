import { Action } from '@ngrx/store';
import { Booking } from '../../app/types/Booking';

export class UpdateBookingItemAction implements Action {
    public static readonly type = '[Booking] Update';

    public readonly type = UpdateBookingItemAction.type;

    constructor(public readonly payload: Booking) {}
}
