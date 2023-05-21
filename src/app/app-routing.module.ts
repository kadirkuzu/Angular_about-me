import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MyCityComponent } from './components/pages/my-city/my-city.component';
import { MyInterestsComponent } from './components/pages/my-interests/my-interests.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';

const routes: Routes = [
  {path : '' , component : HomePageComponent},
  {path : 'my-city' , component : MyCityComponent },
  {path : 'our-team' , component : OurTeamComponent},
  {path : 'my-interests' , component : MyInterestsComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" ,useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
