import { Action } from '@ngrx/store';

export class RejectSaveBookingPlaceAction implements Action {
    public static readonly type = '[Booking] Save booking place rejected';

    public readonly type = RejectSaveBookingPlaceAction.type;
}
