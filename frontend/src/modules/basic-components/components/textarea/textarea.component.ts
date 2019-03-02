import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ob-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
    @Input() value = '';
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() rows: number;
    @Input() cols: number;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();

    public isFocus: boolean;

    public handleChange(event: Event) {
        this.onchange.emit((event.target as HTMLTextAreaElement).value);
    }

    public handleFocus() {
        this.isFocus = true;
    }

    public handleBlur() {
        this.isFocus = false;
    }
}
