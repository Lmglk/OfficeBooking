import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '../../../app/types/Room';
import { selectCurrentRoom } from '../../selectors/selectCurrentRoom';
import { selectUsedPlaces } from '../../selectors/selectUsedPlaces';
import { selectAvailablePlacesForBooking } from '../../selectors/selectAvailablePlacesForBooking';
import { TryToRemoveRoomAction } from '../../actions/TryToRemoveRoomAction';
import { Router } from '@angular/router';
import { Role } from '../../../app/enums/Role';
import { selectUserRole } from '../../../app/selectors/selectUserRole';

@Component({
    selector: 'ob-room-info-container',
    template: `
        <ob-room-info
            [room]="room$ | async"
            [usedPlaces]="usedPlaces$ | async"
            [availablePlacesForBooking]="availablePlacesForBooking$ | async"
            [userRole]="userRole$ | async"
            (remove)="removeRoom($event)"
            (navigateToRoom)="goToRoom()"
        ></ob-room-info>
    `,
})
export class RoomInfoContainerComponent {
    public room$: Observable<Room | null>;
    public usedPlaces$: Observable<number>;
    public availablePlacesForBooking$: Observable<number>;
    public userRole$: Observable<Role>;

    constructor(
        private readonly store: Store<AppState>,
        private readonly router: Router
    ) {
        this.room$ = this.store.pipe(select(selectCurrentRoom));
        this.usedPlaces$ = this.store.pipe(select(selectUsedPlaces));
        this.availablePlacesForBooking$ = this.store.pipe(
            select(selectAvailablePlacesForBooking)
        );
        this.userRole$ = this.store.pipe(select(selectUserRole));
    }

    public removeRoom(room: Room): void {
        this.store.dispatch(new TryToRemoveRoomAction(room));
    }

    public goToRoom() {
        this.router.navigate(['room']);
    }
}
