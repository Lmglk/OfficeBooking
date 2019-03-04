import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputType } from '../../enums/InputType';

@Component({
    selector: 'ob-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    @Input() public value: string | number = '';
    @Input() public label: string;
    @Input() public type = InputType.TEXT;
    @Input() public step: number = 1;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public disabled: boolean;

    @Output() onchange: EventEmitter<Event> = new EventEmitter();

    public isFocus: boolean;

    public handleChange(event: Event) {
        this.onchange.emit(event);
    }

    public handleFocus() {
        this.isFocus = true;
    }

    public handleBlur() {
        this.isFocus = false;
    }
}
