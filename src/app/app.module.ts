import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SideBarComponent } from './components/layout/header/side-bar/side-bar.component';
import { MyCityComponent } from './components/pages/my-city/my-city.component';
import { OurLegacyComponent } from './components/pages/our-legacy/our-legacy.component';
import { MyInterestsComponent } from './components/pages/my-interests/my-interests.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { SignUpComponent } from './components/pages/account/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    MyCityComponent,
    OurLegacyComponent,
    MyInterestsComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
