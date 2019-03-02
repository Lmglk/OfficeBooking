import { Component, HostListener } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'ob-modal',
    template: `
        <div [@fade]><ng-content></ng-content></div>
    `,
    styles: [
        `
            :host {
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                display: grid;
                align-items: center;
                justify-items: center;
            }
        `,
    ],
    animations: [
        trigger('fade', [
            state(
                'void',
                style({
                    opacity: 0,
                    transform: 'scale(0.5)',
                })
            ),
            transition('void => *', animate(100)),
        ]),
    ],
})
export class ModalComponent {
    constructor(private readonly modalService: ModalService) {}

    @HostListener('document:keydown.escape')
    public handleClose() {
        this.modalService.close();
    }
}
