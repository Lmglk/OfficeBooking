import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../../types/Cell';
import { Place } from '../../../app/types/Place';

@Component({
    selector: '[ob-rs-cell]',
    templateUrl: './rs-cell.component.html',
    styleUrls: ['./rs-cell.component.css'],
})
export class RsCellComponent {
    @Input() cell: Cell;
    @Input() size: number;
    @Input() padding: number;
    @Input() hovering = true;

    @Output() select: EventEmitter<Place['id']> = new EventEmitter();

    public get style(): Object {
        return {
            transform: `
                translate(${this.padding}px, ${this.padding}px)
            `,
        };
    }

    public handleClick(): void {
        if (this.cell.placeId) {
            this.select.emit(this.cell.placeId);
        }
    }
}
