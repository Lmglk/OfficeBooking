import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ob-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent {
    @Input() public value = '';

    @Output() public onchange: EventEmitter<string> = new EventEmitter();

    public changeSearchValue(event: Event) {
        this.onchange.emit((event.target as HTMLInputElement).value);
    }
}
