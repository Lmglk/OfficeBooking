import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Cell } from '../../types/Cell';
import { selectCurrentRoom } from '../../../room/selectors/selectCurrentRoom';
import { Room } from '../../../app/types/Room';

@Component({
    selector: 'ob-room-scheme-container',
    template: `
        <ob-rs-layout
            [cells]="cells"
            [height]="room.height"
            [width]="room.width"
        ></ob-rs-layout>
    `,
})
export class RoomSchemeContainerComponent {
    public cells: Cell[] = [];
    public room: Room;

    private roomSizeSubscription: Subscription;

    constructor(private readonly store: Store<AppState>) {
        this.roomSizeSubscription = this.store
            .pipe(select(selectCurrentRoom))
            .subscribe(room => {
                if (room) {
                    this.room = room;
                    this.createCells();
                }
            });
    }

    private createCells() {
        this.cells = [];
        for (let i = 0; i < this.room.height; i++) {
            for (let j = 0; j < this.room.width; j++) {
                const currentPlace = this.room.places.find(
                    place => place.y === i && place.x === j
                );
                this.cells = [
                    ...this.cells,
                    {
                        x: j,
                        y: i,
                        roomId: currentPlace ? currentPlace.id : null,
                        isUsed: !!(currentPlace && currentPlace.isUsed),
                        isAvailable: !!(
                            currentPlace && currentPlace.isAvailableForBooking
                        ),
                    },
                ];
            }
        }
    }
}
