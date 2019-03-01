import { Component, Input } from '@angular/core';

@Component({
    selector: 'ob-button-plate',
    templateUrl: './button-plate.component.html',
    styleUrls: ['./button-plate.component.css'],
})
export class ButtonPlateComponent {
    @Input() label: string;
    @Input() description: string;
}
