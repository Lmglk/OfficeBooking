import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { BasicComponentsModule } from '../basic-components/basic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './configs/router.config';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AppState } from './types/AppState';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { roomReducer } from './store/reducers/room.reducer';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomListContainerComponent } from './containers/room-list-container/room-list-container.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { RoomInfoContainerComponent } from './containers/room-info-container/room-info-container.component';
import { SectionComponent } from './components/section/section.component';
import { IconsModule } from '../icons/icons.module';
import { ButtonPlateComponent } from './components/button-plate/button-plate.component';
import { ModalModule } from '../modal/modal.module';
import { AddRoomModalContainerComponent } from './containers/add-room-modal-container/add-room-modal-container.component';
import { AddRoomModalContentComponent } from './components/add-room-modal-content/add-room-modal-content.component';
import { RoomEffects } from './store/effects/room.effects';
import { RegistrationModule } from '../registration/registration.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        LogoComponent,
        UserMenuComponent,
        RoomListComponent,
        RoomListContainerComponent,
        RoomInfoComponent,
        RoomInfoContainerComponent,
        SectionComponent,
        ButtonPlateComponent,
        AddRoomModalContainerComponent,
        AddRoomModalContentComponent,
    ],
    entryComponents: [AddRoomModalContainerComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({
            userState: userReducer,
            roomState: roomReducer,
        } as ActionReducerMap<AppState>),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([UserEffects, RoomEffects]),
        BasicComponentsModule,
        ModalModule,
        IconsModule,
        RegistrationModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
