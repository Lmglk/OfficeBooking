import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItem } from '../../types/ListItem';

@Component({
    selector: 'ob-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent<T extends ListItem> {
    @Input() data: T[];
    @Input() bindField: keyof T;
    @Input() selectedValueId: ListItem['id'];

    @Output() selected: EventEmitter<T | null> = new EventEmitter();

    public searchValue = '';

    public handleSelect(value: T): void {
        this.selected.emit(value);
    }

    public changeSearchValue(value: string) {
        this.searchValue = value;
    }
}
