import { Component } from '@angular/core';
import { AppState } from '../../../app/types/AppState';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Cell } from '../../types/Cell';
import { selectCurrentRoom } from '../../../room/selectors/selectCurrentRoom';
import { Room } from '../../../app/types/Room';
import { Place } from '../../../app/types/Place';
import { CellType } from '../../enums/CellType';

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
                        type: this.getCellType(currentPlace),
                    },
                ];
            }
        }
    }

    private getCellType(place: Place | undefined): CellType {
        if (!place) {
            return CellType.EMPTY;
        }

        if (place.isUsed) {
            return CellType.USED;
        }

        return place.isAvailableForBooking
            ? CellType.AVAILABLE
            : CellType.NOT_AVAILABLE;
    }
}
