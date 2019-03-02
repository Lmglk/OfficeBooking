import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[obInsertion]',
})
export class InsertionDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
