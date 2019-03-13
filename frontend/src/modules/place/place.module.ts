import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceLayoutComponent } from './components/place-layout/place-layout.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { SharedModule } from '../shared/shared.module';
import { PlaceInfoContainerComponent } from './containers/place-info-container/place-info-container.component';
import { PlaceInfoComponent } from './components/place-info/place-info.component';
import { PlaceListContainerComponent } from './containers/place-list-container/place-list-container.component';
import { IconsModule } from '../icons/icons.module';
import { EffectsModule } from '@ngrx/effects';
import { PlaceEffects } from './effects/place.effects';
import { AddPlaceModalContainerComponent } from './containers/add-place-modal-container/add-place-modal-container.component';
import { AddPlaceModalContentComponent } from './components/add-place-modal-content/add-place-modal-content.component';

@NgModule({
    declarations: [
        PlaceLayoutComponent,
        PlaceInfoContainerComponent,
        PlaceInfoComponent,
        PlaceListContainerComponent,
        AddPlaceModalContainerComponent,
        AddPlaceModalContentComponent,
    ],
    imports: [
        CommonModule,
        BasicComponentsModule,
        SharedModule,
        IconsModule,
        EffectsModule.forFeature([PlaceEffects]),
    ],
    entryComponents: [AddPlaceModalContainerComponent],
    exports: [PlaceLayoutComponent],
})
export class PlaceModule {}