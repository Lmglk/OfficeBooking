import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ob-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input() name: string;
    @Input() disabled: boolean;
    @Input() bordered: boolean;

    @Output() click: EventEmitter<Event> = new EventEmitter();

    public handleClick(event: Event) {
        event.stopPropagation();

        if (!this.disabled) {
            this.click.emit(event);
        }
    }
}
