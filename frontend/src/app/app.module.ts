import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BasicComponentsModule } from './modules/basic-components/basic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './configs/router.config';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        LogoComponent,
        UserMenuComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BasicComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
