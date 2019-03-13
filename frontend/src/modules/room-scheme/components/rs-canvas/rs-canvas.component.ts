import { Component, Input } from '@angular/core';
import { Cell } from '../../types/Cell';

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
}
