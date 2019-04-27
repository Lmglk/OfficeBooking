import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileContainerComponent } from './containers/profile-container.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';

@NgModule({
    declarations: [ProfileComponent, ProfileContainerComponent],
    imports: [
        CommonModule,
        BasicComponentsModule,
        EffectsModule.forFeature([ProfileEffects]),
    ],
})
export class ProfileModule {}
