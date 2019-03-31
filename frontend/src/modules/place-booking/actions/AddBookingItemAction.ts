import { Action } from '@ngrx/store';
import { Booking } from '../../app/types/Booking';

export class AddBookingItemAction implements Action {
    public static readonly type = '[Booking] Add';

    public readonly type = AddBookingItemAction.type;

    constructor(public readonly payload: Booking) {}
}
