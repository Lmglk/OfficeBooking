import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cell } from '../../types/Cell';
import { Place } from '../../../app/types/Place';

@Component({
    selector: 'ob-rs-canvas',
    templateUrl: './rs-canvas.component.html',
    styleUrls: ['./rs-canvas.component.css'],
})
export class RsCanvasComponent {
    @Input() cells: Cell[];
    @Input() height: number;
    @Input() width: number;
    @Input() nodeSize: number;
    @Input() padding: number;

    @Output() selectPlace: EventEmitter<Place['id']> = new EventEmitter();

    public handleSelectPlace(placeId: Place['id']): void {
        this.selectPlace.emit(placeId);
    }
}
