import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbFormContainerComponent } from './containters/pb-form-container.component';
import { PbFormComponent } from './components/pb-form/pb-form.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { EffectsModule } from '@ngrx/effects';
import { PlaceBookingEffects } from './effects/place-booking.effects';

@NgModule({
    declarations: [PbFormContainerComponent, PbFormComponent],
    imports: [
        CommonModule,
        BasicComponentsModule,
        EffectsModule.forFeature([PlaceBookingEffects]),
    ],
    exports: [PbFormContainerComponent],
})
export class PlaceBookingModule {}
