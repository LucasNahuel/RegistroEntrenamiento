import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'environments/environment';
import { RegistrationCompleteDialogComponent } from '../dialogs/registration-complete-dialog/registration-complete-dialog.component';
import { UsernameErrorDialogComponent } from '../dialogs/username-error-dialog/username-error-dialog.component';
import { MyErrorStateMatcher } from '../login/login.component';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user="";
  password="";
  passwordVerif="";
  email="";
  emailVerif="";
  passwordMatch= false;
  emailMatch=false;
  primaryColor= environment.primaryColor;

 constructor(private registerService: RegisterService, public dialog: MatDialog) { }

 ngOnInit() {
 }
 registerForm = new FormGroup({
 userFormControl : new FormControl('', [
   Validators.required,
 ]),

 passwordFormControl : new FormControl('', [
   Validators.required,
 ]),

 passwordVerifFormControl : new FormControl('', [
  Validators.required,
  this.passwordValidator,
 ]),

 emailFormControl : new FormControl('', [
   Validators.email,
   Validators.required,
 ]),

 emailVerifFormControl : new FormControl('', [
  this.emailValidator,
  Validators.required,
 ]),
});



 matcher = new MyErrorStateMatcher();

 
 register(): void{

   this.registerService.Register(this.user, this.password, this.email).subscribe(val => this.registerResponse(val));
 
 }


 //this is a custom validator for checking if password matches password
 //verification input

  passwordValidator(control: FormControl) { 
    
    if (control.parent) {
      let passwordInputA = control.parent.get('passwordFormControl');

      let passwordInputB = control.parent.get('passwordVerifFormControl')

      if (passwordInputA.value !== passwordInputB.value) {
        return { passwordValidator: true }
      }
      else {
        return null;
      }
    }
  }

  emailValidator(control: FormControl) { 
    
    if (control.parent) {
      let emailInputA = control.parent.get('emailFormControl');

      let emailInputB = control.parent.get('emailVerifFormControl');

      if (emailInputA.value !== emailInputB.value) {
        return { emailValidator: true }
      }
      else {
        return null;
      }
    }
  }

  registerResponse(response):void{
    if(response.value == "username used"){
      
      let usernameError = this.dialog.open(UsernameErrorDialogComponent);

      this.user="";

    }else{
      let registrationCompleteDialog = this.dialog.open(RegistrationCompleteDialogComponent);
    }

    

  }



}
