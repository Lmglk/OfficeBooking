import { Action } from '@ngrx/store';
import { Booking } from '../../app/types/Booking';

export class RemoveBookingItemAction implements Action {
    public static readonly type = '[Booking] Remove';

    public readonly type = RemoveBookingItemAction.type;

    constructor(public readonly payload: Booking['id']) {}
}
