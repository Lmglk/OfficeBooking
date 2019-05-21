import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ob-rs-border',
    templateUrl: './rs-border.component.html',
    styleUrls: ['./rs-border.component.css'],
})
export class RsBorderComponent implements OnChanges {
    @Input() size: number;
    @Input() vertical = false;

    public dashes: boolean[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        this.dashes = Array(Math.floor(this.size / 2)).fill(true);
    }

    public get style() {
        return {
            gridAutoFlow: this.vertical ? 'row' : 'column',
        };
    }
}
