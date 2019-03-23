import { Action } from '@ngrx/store';

export class ResetBookingListAction implements Action {
    public static readonly type = '[Booking] Reset';

    public readonly type = ResetBookingListAction.type;
}
