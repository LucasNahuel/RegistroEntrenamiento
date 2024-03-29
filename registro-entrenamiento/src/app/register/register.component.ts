import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JWTService } from 'app/jwt.service';
import { UserService } from 'app/user.service';
import { environment } from 'environments/environment';
import { RegistrationCompleteDialogComponent } from '../dialogs/registration-complete-dialog/registration-complete-dialog.component';
import { MyErrorStateMatcher } from '../login/login.component';
import { RegisterService } from '../register.service';
import { UsernameValidator } from 'app/username-validator';

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

constructor(private registerService: RegisterService, public dialog: MatDialog,  private userService: UserService, private jwtService: JWTService) { }

 ngOnInit() {
 }
 registerForm = new FormGroup({
 userFormControl : new FormControl('', 
   [Validators.required],
   [UsernameValidator.createValidator(this.userService)]
  ),

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
    
      let registrationCompleteDialog = this.dialog.open(RegistrationCompleteDialogComponent);
    
  }



}
