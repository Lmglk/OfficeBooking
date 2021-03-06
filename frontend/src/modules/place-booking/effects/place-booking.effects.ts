import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TryToSaveBookingPlaceAction } from '../actions/TryToSaveBookingPlaceAction';
import { ApiPlaceBookingService } from '../services/api-place-booking.service';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { RejectSaveBookingPlaceAction } from '../actions/RejectSaveBookingPlaceAction';
import { of } from 'rxjs';
import { AppState } from '../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentPlaceId } from '../../place/selectors/selectCurrentPlaceId';
import { TryToLoadAllBookingPlaceAction } from '../actions/TryToLoadAllBookingPlaceAction';
import { RejectLoadAllBookingPlaceAction } from '../actions/RejectLoadAllBookingPlaceAction';
import { SetBookingListAction } from '../actions/SetBookingListAction';
import { AddBookingItemAction } from '../actions/AddBookingItemAction';
import { TryToUpdateBookingItemAction } from '../actions/TryToUpdateBookingItemAction';
import { RejectUpdateBookingItemAction } from '../actions/RejectUpdateBookingItemAction';
import { UpdateBookingItemAction } from '../actions/UpdateBookingItemAction';

@Injectable()
export class PlaceBookingEffects {
    @Effect()
    public load$ = this.actions$.pipe(
        ofType(TryToLoadAllBookingPlaceAction.type),
        switchMap(() =>
            this.bookingService.getAll().pipe(
                map(data => new SetBookingListAction(data)),
                catchError(error => {
                    console.error(error);
                    return of(new RejectLoadAllBookingPlaceAction());
                })
            )
        )
    );

    @Effect()
    public save$ = this.actions$.pipe(
        ofType<TryToSaveBookingPlaceAction>(TryToSaveBookingPlaceAction.type),
        withLatestFrom(this.store.pipe(select(selectCurrentPlaceId))),
        switchMap(([action, placeId]) => {
            if (!placeId) {
                throw new Error('Place is not selected');
            }

            return this.bookingService
                .save(placeId, action.payload)
                .pipe(
                    map(bookingItem => new AddBookingItemAction(bookingItem))
                );
        }),
        catchError(error => {
            console.error(error);
            return of(new RejectSaveBookingPlaceAction());
        })
    );

    @Effect()
    public update$ = this.actions$.pipe(
        ofType<TryToUpdateBookingItemAction>(TryToUpdateBookingItemAction.type),
        withLatestFrom(this.store.pipe(select(selectCurrentPlaceId))),
        switchMap(([action, placeId]) => {
            if (!placeId) {
                throw new Error('Place is not selected');
            }

            return this.bookingService
                .update(placeId, action.payload)
                .pipe(
                    map(bookingItem => new UpdateBookingItemAction(bookingItem))
                );
        }),
        catchError(error => {
            console.error(error);
            return of(new RejectUpdateBookingItemAction());
        })
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly bookingService: ApiPlaceBookingService
    ) {}
}
