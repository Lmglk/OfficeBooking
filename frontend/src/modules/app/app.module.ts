import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './configs/router.config';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AppState } from './types/AppState';
import { roomReducer } from './reducers/room.reducer';
import { IconsModule } from '../icons/icons.module';
import { ModalModule } from '../modal/modal.module';
import { AuthorizationModule } from '../authorization/authorization.module';
import { LayoutComponent } from './components/layout/layout.component';
import { PlaceModule } from '../place/place.module';
import { RoomModule } from '../room/room.module';
import { EffectsModule } from '@ngrx/effects';
import { bookingReducer } from './reducers/booking.reducer';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        UserMenuComponent,
        LayoutComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({
            userState: userReducer,
            roomState: roomReducer,
            bookingState: bookingReducer,
        } as ActionReducerMap<AppState>),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        BasicComponentsModule,
        ModalModule,
        IconsModule,
        AuthorizationModule,
        RoomModule,
        PlaceModule,
        ProfileModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
