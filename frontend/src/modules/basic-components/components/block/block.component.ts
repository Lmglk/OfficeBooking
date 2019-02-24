import { Component, Input } from '@angular/core';

@Component({
    selector: 'ob-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
})
export class BlockComponent {
    @Input() name: string;
}
