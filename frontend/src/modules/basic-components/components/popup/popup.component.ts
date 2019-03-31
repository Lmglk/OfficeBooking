import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'ob-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
    @Input() width: number;
    @Input() height: number;

    public isOpenPopup = false;
    public x: number;
    public y: number;

    constructor(private readonly elementRef: ElementRef) {}

    public handleOpenPopup() {
        if (!this.isOpenPopup) {
            this.x = this.elementRef.nativeElement.offsetLeft;
            this.y = this.elementRef.nativeElement.offsetHeight;
            this.isOpenPopup = true;
        } else {
            this.isOpenPopup = false;
        }
    }
}
