import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './containers/modal-container.component';
import { InsertionDirective } from './directives/insertion.directive';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [ModalContainerComponent, InsertionDirective, ModalComponent],
    entryComponents: [ModalContainerComponent],
    imports: [CommonModule, BrowserAnimationsModule],
    exports: [ModalContainerComponent],
})
export class ModalModule {}
