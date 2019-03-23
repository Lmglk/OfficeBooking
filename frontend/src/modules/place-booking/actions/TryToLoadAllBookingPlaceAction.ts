import { Action } from '@ngrx/store';

export class TryToLoadAllBookingPlaceAction implements Action {
    public static readonly type = '[Booking] Try to load all booking places';

    public readonly type = TryToLoadAllBookingPlaceAction.type;
}
