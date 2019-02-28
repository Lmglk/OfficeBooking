import { Component } from '@angular/core';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '../../types/Room';
import { selectCurrentRoom } from '../../store/selectors/selectCurrentRoom';
import { selectUsedPlaces } from '../../store/selectors/selectUsedPlaces';
import { selectAvailablePlacesForBooking } from '../../store/selectors/selectAvailablePlacesForBooking';

@Component({
    selector: 'ob-room-info-container',
    template: `
        <ob-room-info
            [room]="room$ | async"
            [usedPlaces]="usedPlaces$ | async"
            [availablePlacesForBooking]="availablePlacesForBooking$ | async"
        ></ob-room-info>
    `,
})
export class RoomInfoContainerComponent {
    public room$: Observable<Room | null>;
    public usedPlaces$: Observable<number>;
    public availablePlacesForBooking$: Observable<number>;

    constructor(private readonly store: Store<AppState>) {
        this.room$ = this.store.pipe(select(selectCurrentRoom));
        this.usedPlaces$ = this.store.pipe(select(selectUsedPlaces));
        this.availablePlacesForBooking$ = this.store.pipe(
            select(selectAvailablePlacesForBooking)
        );
    }
}
