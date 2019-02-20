import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BasicComponentsModule } from './modules/basic-components/basic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './configs/router.config';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, HomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BasicComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
