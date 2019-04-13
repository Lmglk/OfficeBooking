import { Component, Input } from '@angular/core';

@Component({
    selector: 'ob-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
    @Input() message: string;
}
