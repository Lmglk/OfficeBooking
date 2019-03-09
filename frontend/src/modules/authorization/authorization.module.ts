import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationContainerComponent } from './containers/registration-container/registration-container.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { RouterModule } from '@angular/router';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [CommonModule, BasicComponentsModule, RouterModule],
    declarations: [
        RegistrationComponent,
        RegistrationContainerComponent,
        LoginContainerComponent,
        LoginComponent,
    ],
})
export class AuthorizationModule {}
