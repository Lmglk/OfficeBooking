import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationContainerComponent } from './containers/registration-container/registration-container.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, BasicComponentsModule, RouterModule],
    declarations: [RegistrationComponent, RegistrationContainerComponent],
})
export class RegistrationModule {}
