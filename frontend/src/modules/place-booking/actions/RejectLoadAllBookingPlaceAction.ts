import { Action } from '@ngrx/store';

export class RejectLoadAllBookingPlaceAction implements Action {
    public static readonly type = '[Booking] Load all booking places rejected';

    public readonly type = RejectLoadAllBookingPlaceAction.type;
}
