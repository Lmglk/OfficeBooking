import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { Cell } from '../../types/Cell';
import { selectCurrentRoom } from '../../../room/selectors/selectCurrentRoom';
import { Room } from '../../../app/types/Room';
import { Place } from '../../../app/types/Place';
import { CellType } from '../../enums/CellType';
import { SetSelectPlaceIdAction } from '../../../place/actions/SetSelectPlaceIdAction';
import { Booking } from '../../../app/types/Booking';
import { selectBookingListForCurrentDate } from '../../../place-booking/selectors/selectBookingListForCurrentDate';

@Component({
    selector: 'ob-room-scheme-container',
    template: `
        <ob-rs-layout
            [cells]="cells"
            [height]="room.height"
            [width]="room.width"
            (selectPlace)="handleSelectPlace($event)"
        ></ob-rs-layout>
    `,
})
export class RoomSchemeContainerComponent {
    public cells: Cell[] = [];
    public bookingList: Booking[] = [];
    public room: Room;

    private subscription: Subscription;

    constructor(private readonly store: Store<AppState>) {
        this.subscription = combineLatest(
            this.store.pipe(select(selectCurrentRoom)),
            this.store.pipe(select(selectBookingListForCurrentDate))
        ).subscribe(([room, bookingList]) => {
            if (room) {
                this.room = room;
                this.bookingList = bookingList;
                this.createCells();
            }
        });
    }

    public handleSelectPlace(placeId: Place['id']): void {
        this.store.dispatch(new SetSelectPlaceIdAction(placeId));
    }

    private createCells() {
        this.cells = [];
        for (let i = 0; i < this.room.height; i++) {
            for (let j = 0; j < this.room.width; j++) {
                const currentPlace = this.room.places.find(
                    place => place.y === i && place.x === j
                );

                const currentBookingItem =
                    currentPlace &&
                    this.bookingList.find(
                        item => item.place.id === currentPlace.id
                    );

                this.cells = [
                    ...this.cells,
                    {
                        x: j,
                        y: i,
                        placeId: currentPlace ? currentPlace.id : null,
                        type: this.getCellType(
                            currentPlace,
                            currentBookingItem
                        ),
                    },
                ];
            }
        }
    }

    private getCellType(
        place: Place | undefined,
        bookingItem: Booking | undefined
    ): CellType {
        if (!place) {
            return CellType.EMPTY;
        }

        if (bookingItem && bookingItem.approved) {
            return CellType.USED;
        }

        return place.isAvailableForBooking
            ? CellType.AVAILABLE
            : CellType.NOT_AVAILABLE;
    }
}
