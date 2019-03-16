import { Component, Input } from '@angular/core';
import { Cell } from '../../types/Cell';

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

    public get style() {
        return {
            transform: `
                translate(${this.padding}px, ${this.padding}px)
            `,
        };
    }
}
