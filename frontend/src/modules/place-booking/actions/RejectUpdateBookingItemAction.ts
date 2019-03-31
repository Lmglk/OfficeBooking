import { Action } from '@ngrx/store';

export class RejectUpdateBookingItemAction implements Action {
    public static readonly type = '[Booking] Update booking rejected';

    public readonly type = RejectUpdateBookingItemAction.type;
}
