import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { MyarticlesComponent } from './myarticles/myarticles.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'myarticles',component:MyarticlesComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
