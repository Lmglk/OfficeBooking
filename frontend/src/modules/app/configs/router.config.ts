import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { RoomComponent } from '../components/room/room.component';

export const childRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'room', component: RoomComponent },
];

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: childRoutes,
    },
    { path: 'login', component: LoginContainerComponent },
    { path: 'registration', component: RegistrationContainerComponent },
    { path: '**', component: HomeComponent, canActivate: [AuthGuard] },
];
