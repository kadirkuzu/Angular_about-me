import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MyCityComponent } from './components/pages/my-city/my-city.component';
import { OurLegacyComponent } from './components/pages/our-legacy/our-legacy.component';
import { MyInterestsComponent } from './components/pages/my-interests/my-interests.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/pages/account/login/login.component';
import { SignUpComponent } from './components/pages/account/sign-up/sign-up.component';

const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'my-city' , component : MyCityComponent},
  {path : 'our-legacy' , component : OurLegacyComponent},
  {path : 'my-interests' , component : MyInterestsComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'sign-up' , component : SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
