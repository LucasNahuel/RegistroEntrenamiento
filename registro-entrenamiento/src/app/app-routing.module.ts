import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainLogComponent} from './train-log/train-log.component';
import { JwtAuthorizeGuardService } from './jwt-authorize-guard.service';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { DeleteTrainingComponent } from './delete-training/delete-training.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SearchTrainingComponent } from './search-training/search-training.component';
import { DetailsTrainingComponent } from './details-training/details-training.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'trainlog', component: TrainLogComponent, canActivate: [JwtAuthorizeGuardService]},
  { path: 'new-training', component: CreateTrainingComponent, canActivate: [JwtAuthorizeGuardService]},
  { path: 'list-trainings', component: DeleteTrainingComponent, canActivate: [JwtAuthorizeGuardService]},
  { path: 'analytics', component: AnalyticsComponent, canActivate: [JwtAuthorizeGuardService]},
  { path: 'search-training', component: SearchTrainingComponent, canActivate: [JwtAuthorizeGuardService]},
  {path: 'training-details/:id', component: DetailsTrainingComponent, canActivate: [JwtAuthorizeGuardService]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [JwtAuthorizeGuardService]},
  {path: 'training-details', component: UserProfileComponent, canActivate: [JwtAuthorizeGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
