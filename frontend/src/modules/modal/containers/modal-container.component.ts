import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { InsertionDirective } from '../directives/insertion.directive';

@Component({
    selector: 'ob-modal-container',
    template: `
        <ob-modal>
            <div><ng-template obInsertion></ng-template></div>
        </ob-modal>
    `,
})
export class ModalContainerComponent implements OnInit {
    @ViewChild(InsertionDirective) private insertPlace: InsertionDirective;

    public childComponent: Type<Component>;

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentFactoryResolver: ComponentFactoryResolver
    ) {}

    public ngOnInit(): void {
        const componentModalFactory = this.componentFactoryResolver.resolveComponentFactory(
            this.childComponent
        );

        this.insertPlace.viewContainerRef.createComponent(
            componentModalFactory
        );
    }
}
