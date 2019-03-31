import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputType } from '../../../basic-components/enums/InputType';
import { BookParamters } from '../../types/BookParamters';

@Component({
    selector: 'ob-pb-form',
    templateUrl: './pb-form.component.html',
    styleUrls: ['./pb-form.component.css'],
})
export class PbFormComponent {
    public readonly inputType = InputType;

    @Input() public parameters: BookParamters;

    @Output() public onchange: EventEmitter<BookParamters> = new EventEmitter();
    @Output() public submit: EventEmitter<void> = new EventEmitter();

    public getTime(date: Date) {
        return date ? date.toISOString().slice(0, 10) : null;
    }

    public handleChange(value: Event, fieldName: keyof BookParamters) {
        const time = new Date((value.target as HTMLInputElement).value);

        this.onchange.emit({
            ...this.parameters,
            [fieldName]: isNaN(time.getTime()) ? null : time,
        });
    }

    public handleSubmit() {
        this.submit.emit();
    }
}
