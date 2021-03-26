
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"portfolio", component:PortfolioComponent,  canActivate:[authGuard]},
  
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

