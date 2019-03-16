import { Component, Input } from '@angular/core';
import { CellType } from '../../enums/CellType';

@Component({
    selector: 'ob-rs-legend',
    templateUrl: './rs-legend.component.html',
    styleUrls: ['./rs-legend.component.css'],
})
export class RsLegendComponent {
    @Input() nodeSize: number;
    @Input() padding: number;

    public readonly cellType = CellType;
}
