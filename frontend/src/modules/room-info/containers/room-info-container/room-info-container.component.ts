import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '../../../app/types/Room';
import { selectCurrentRoom } from '../../../app/store/selectors/selectCurrentRoom';
import { selectUsedPlaces } from '../../../app/store/selectors/selectUsedPlaces';
import { selectAvailablePlacesForBooking } from '../../../app/store/selectors/selectAvailablePlacesForBooking';
import { TryToRemoveRoomAction } from '../../actions/TryToRemoveRoomAction';
import { Router } from '@angular/router';

@Component({
    selector: 'ob-room-info-container',
    template: `
        <ob-room-info
            [room]="room$ | async"
            [usedPlaces]="usedPlaces$ | async"
            [availablePlacesForBooking]="availablePlacesForBooking$ | async"
            (remove)="removeRoom($event)"
            (navigateToRoom)="goToRoom()"
        ></ob-room-info>
    `,
})
export class RoomInfoContainerComponent {
    public room$: Observable<Room | null>;
    public usedPlaces$: Observable<number>;
    public availablePlacesForBooking$: Observable<number>;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {
        this.room$ = this.store.pipe(select(selectCurrentRoom));
        this.usedPlaces$ = this.store.pipe(select(selectUsedPlaces));
        this.availablePlacesForBooking$ = this.store.pipe(
            select(selectAvailablePlacesForBooking)
        );
    }

    public removeRoom(room: Room): void {
        this.store.dispatch(new TryToRemoveRoomAction(room));
    }

    public goToRoom() {
        this.router.navigate(['room']);
    }
}
