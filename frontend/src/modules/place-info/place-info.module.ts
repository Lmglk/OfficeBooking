import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { PlaceInfoContainerComponent } from './containers/place-info-container/place-info-container.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';

@NgModule({
    declarations: [PlaceInfoComponent, PlaceInfoContainerComponent],
    imports: [CommonModule, BasicComponentsModule, SharedModule],
    exports: [PlaceInfoContainerComponent],
})
export class PlaceInfoModule {}
