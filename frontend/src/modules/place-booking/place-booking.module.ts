import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbFormContainerComponent } from './containers/pb-form-container.component';
import { PbFormComponent } from './components/pb-form/pb-form.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { EffectsModule } from '@ngrx/effects';
import { PlaceBookingEffects } from './effects/place-booking.effects';
import { PbListComponent } from './components/pb-list/pb-list.component';
import { PbListContainerComponent } from './containers/pb-list-container.component';

@NgModule({
    declarations: [
        PbFormContainerComponent,
        PbFormComponent,
        PbListComponent,
        PbListContainerComponent,
    ],
    imports: [
        CommonModule,
        BasicComponentsModule,
        EffectsModule.forFeature([PlaceBookingEffects]),
    ],
    exports: [PbFormContainerComponent, PbListContainerComponent],
})
export class PlaceBookingModule {}
