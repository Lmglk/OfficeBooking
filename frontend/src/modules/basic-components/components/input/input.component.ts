import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputType } from '../../enums/InputType';

@Component({
    selector: 'ob-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
    @Input() public value: string | number = '';
    @Input() public label: string;
    @Input() public type = InputType.TEXT;
    @Input() public step: number = 1;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public disabled: boolean;

    @Output() onchange: EventEmitter<string | number> = new EventEmitter();

    public isFocus: boolean;
    private prevValue: number;

    public ngOnInit(): void {
        if (this.type === InputType.NUMBER) {
            this.prevValue = this.value as number;
        }
    }

    public handleChange(event: Event) {
        const element = event.target as HTMLInputElement;

        if (this.type === InputType.NUMBER) {
            const value = element.valueAsNumber;
            this.onchange.emit(isNaN(value) ? 0 : value);
        } else {
            this.onchange.emit(element.value);
        }
    }

    public handleFocus() {
        this.isFocus = true;
    }

    public handleBlur() {
        this.isFocus = false;
    }
}
