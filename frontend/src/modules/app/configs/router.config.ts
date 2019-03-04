import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegistrationContainerComponent } from '../../registration/containers/registration-container/registration-container.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationContainerComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];
