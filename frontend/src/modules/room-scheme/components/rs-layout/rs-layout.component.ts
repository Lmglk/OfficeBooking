import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../../types/Cell';
import { range } from '../../common/range';
import { Place } from '../../../app/types/Place';

@Component({
    selector: 'ob-rs-layout',
    templateUrl: './rs-layout.component.html',
    styleUrls: ['./rs-layout.component.css'],
})
export class RsLayoutComponent implements OnInit {
    @Input() cells: Cell[];
    @Input() height: number;
    @Input() width: number;

    @Output() selectPlace: EventEmitter<Place['id']> = new EventEmitter();

    public axisX: number[];
    public axisY: number[];

    public readonly nodeSize = 25;
    public readonly padding = 5;

    public ngOnInit(): void {
        this.axisX = Array.from(range(1, this.height));
        this.axisY = Array.from(range(1, this.width));
    }

    public handleSelectPlace(placeId: Place['id']): void {
        this.selectPlace.emit(placeId);
    }
}
