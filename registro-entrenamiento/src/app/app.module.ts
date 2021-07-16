import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './jwt-interceptor.service';
import { TrainLogComponent } from './train-log/train-log.component';
import { CredentialErrorDialogComponent } from './dialogs/credential-error-dialog/credential-error-dialog.component';
import { MatDialogClose, MatDialogModule, MatToolbar } from '@angular/material';
import { UsernameErrorDialogComponent } from './dialogs/username-error-dialog/username-error-dialog.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateTrainingComponent } from './create-training/create-training.component';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { NewExerciseComponent } from './dialogs/new-exercise/new-exercise.component';
import { RegistrationCompleteDialogComponent } from './dialogs/registration-complete-dialog/registration-complete-dialog.component'
import { CreateExerciceComponent } from './dialogs/create-exercice/create-exercice.component';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrainLogComponent,
    CredentialErrorDialogComponent,
    UsernameErrorDialogComponent,
    AppToolbarComponent,
    CreateTrainingComponent,
    NavigationDrawerComponent,
    NewExerciseComponent,
    RegistrationCompleteDialogComponent,
    CreateExerciceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent }
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CredentialErrorDialogComponent,
    UsernameErrorDialogComponent,
    RegistrationCompleteDialogComponent,
    CreateExerciceComponent
  ],
})
export class AppModule { }

