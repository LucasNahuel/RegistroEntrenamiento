import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../login.service';
import {MatButtonModule} from '@angular/material/button';
import { CredentialErrorDialogComponent } from '../dialogs/credential-error-dialog/credential-error-dialog.component';
import { JWTService } from '../jwt.service';
import {Router} from '@angular/router';
import { environment } from 'environments/environment';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user="";
   password="";
   primaryColor= environment.primaryColor;

  constructor(private loginService: LoginService, public dialog: MatDialog, public jwtservice: JWTService, public router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({

    userFormControl : new FormControl('', [
      Validators.required,
    ]),

    passwordFormControl : new FormControl('', [
      Validators.required,
    ]),

  });
  
  

  matcher = new MyErrorStateMatcher();

  
  Login(): void{

    this.loginService.Login(this.user, this.password).subscribe(val => this.LoginResponse(val));


  }

  LoginResponse(response): void{
    if(response.value == "invalid credentials"){

      let credentialsError = this.dialog.open(CredentialErrorDialogComponent);

    }else{
      //save the token
      console.log(response);
      this.jwtservice.setToken(response.value);
      this.router.navigate(['/trainlog']);
      
    }
  }



}

