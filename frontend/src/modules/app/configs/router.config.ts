import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';

export const routes: Routes = [
    { path: 'login', component: LoginContainerComponent },
    { path: 'authorization', component: RegistrationContainerComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];
