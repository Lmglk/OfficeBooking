import { Action } from '@ngrx/store';
import { Booking } from '../../app/types/Booking';

export class SetBookingListAction implements Action {
    public static readonly type = '[Booking] Set';

    public readonly type = SetBookingListAction.type;

    constructor(public readonly payload: Booking[]) {}
}
