import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ob-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
    @Input() label: string;
    @Input() checked: boolean;
    @Input() disabled: boolean;

    @Output() oncheck: EventEmitter<boolean>;

    public id: number;

    constructor() {
        this.oncheck = new EventEmitter();
        this.id = Math.floor(Math.random() * 100000);
    }

    handleCheck(event: any, isChecked: boolean) {
        event.preventDefault();
        if (!this.disabled) {
            this.checked = !isChecked;
            this.oncheck.emit(this.checked);
        }
    }
}
