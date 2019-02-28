import { Component, Input } from '@angular/core';

@Component({
    selector: 'ob-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css'],
})
export class SectionComponent {
    @Input() name: string;
}
