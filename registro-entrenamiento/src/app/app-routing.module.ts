import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainLogComponent} from './train-log/train-log.component';
import { JwtAuthorizeGuardService } from './jwt-authorize-guard.service';
import { CreateTrainingComponent } from './create-training/create-training.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'trainlog', component: TrainLogComponent, canActivate: [JwtAuthorizeGuardService]},
  { path: 'new-training', component: CreateTrainingComponent, canActivate: [JwtAuthorizeGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
