import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    Type,
} from '@angular/core';
import { ModalContainerComponent } from '../containers/modal-container.component';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private componentRef: ComponentRef<ModalContainerComponent>;

    constructor(
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly applicationRef: ApplicationRef,
        private readonly injector: Injector
    ) {}

    public open<T>(component: Type<T>) {
        this.attachComponentToBody(component);
    }

    public close() {
        this.detachComponentFromBody();
    }

    private attachComponentToBody<T>(component: Type<T>) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            ModalContainerComponent
        );

        const componentRef = componentFactory.create(this.injector);

        componentRef.instance.childComponent = component;

        this.applicationRef.attachView(componentRef.hostView);
        const elementDOM = (componentRef.hostView as EmbeddedViewRef<T>)
            .rootNodes[0];
        document.body.appendChild(elementDOM);

        this.componentRef = componentRef;
    }

    private detachComponentFromBody() {
        this.applicationRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }
}
