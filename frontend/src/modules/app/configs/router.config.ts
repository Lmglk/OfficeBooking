import { Routes } from '@angular/router';
import { RoomLayoutComponent } from '../../room/components/room-layout/room-layout.component';
import { AuthGuard } from '../guards/auth.guard';
import { RegistrationContainerComponent } from '../../authorization/containers/registration-container/registration-container.component';
import { LoginContainerComponent } from '../../authorization/containers/login-container/login-container.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { PlaceLayoutComponent } from '../../place/components/place-layout/place-layout.component';

export const childRoutes: Routes = [
    { path: 'room-layout', component: RoomLayoutComponent },
    { path: 'room', component: PlaceLayoutComponent },
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
    { path: '**', component: RoomLayoutComponent, canActivate: [AuthGuard] },
];
