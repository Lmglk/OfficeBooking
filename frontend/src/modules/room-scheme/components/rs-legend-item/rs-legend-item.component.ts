import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CellType } from '../../enums/CellType';
import { Cell } from '../../types/Cell';

@Component({
    selector: 'ob-rs-legend-item',
    templateUrl: './rs-legend-item.component.html',
    styleUrls: ['./rs-legend-item.component.css'],
})
export class RsLegendItemComponent implements OnChanges {
    @Input() cellType: CellType;
    @Input() label: string;
    @Input() nodeSize: number;
    @Input() padding: number;

    public cell: Cell;

    constructor() {
        this.cell = {
            x: 0,
            y: 0,
            placeId: null,
            type: CellType.EMPTY,
        };
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.cellType) {
            this.cell = {
                ...this.cell,
                type: this.cellType,
            };
        }
    }
}
