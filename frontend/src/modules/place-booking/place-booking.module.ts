import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbFormContainerComponent } from './containers/pb-form-container.component';
import { PbFormComponent } from './components/pb-form/pb-form.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { EffectsModule } from '@ngrx/effects';
import { PlaceBookingEffects } from './effects/place-booking.effects';
import { PbListComponent } from './components/pb-list/pb-list.component';
import { PbListContainerComponent } from './containers/pb-list-container.component';
import { AnswerPipe } from './pipes/answer.pipe';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PbFormContainerComponent,
        PbFormComponent,
        PbListComponent,
        PbListContainerComponent,
        AnswerPipe,
    ],
    imports: [
        CommonModule,
        BasicComponentsModule,
        IconsModule,
        EffectsModule.forFeature([PlaceBookingEffects]),
        SharedModule,
    ],
    exports: [PbFormContainerComponent, PbListContainerComponent],
})
export class PlaceBookingModule {}
