import { Component, Input } from '@angular/core';
import { Place } from '../../../app/types/Place';

@Component({
    selector: 'ob-place-info',
    templateUrl: './place-info.component.html',
    styleUrls: ['./place-info.component.css'],
})
export class PlaceInfoComponent {
    @Input() place: Place;
}
