import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from '../../../app/types/Place';

@Component({
    selector: 'ob-place-info',
    templateUrl: './place-info.component.html',
    styleUrls: ['./place-info.component.css'],
})
export class PlaceInfoComponent {
    @Input() place: Place;

    @Output() remove: EventEmitter<Place> = new EventEmitter();

    public handleRemovePlace() {
        this.remove.emit(this.place);
    }
}
