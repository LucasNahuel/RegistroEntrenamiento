import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JWTService } from 'app/jwt.service';
import { MyErrorStateMatcher } from 'app/login/login.component';
import { UserService } from 'app/user.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  unchangedUser;

  matcher = new MyErrorStateMatcher();

  primaryColor = environment.primaryColor;


  userUpdateForm = new FormGroup({

    id: new FormControl('', [
      Validators.required,
    ]),
    actualPassword: new FormControl('', [
      Validators.required,
    ]),
    newPassword: new FormControl('', [
      this.passwordValidator,
    ]),
    newPasswordConfirm: new FormControl('', [
      this.passwordValidator,
    ]),
    userName : new FormControl([],
      Validators.required,
      ),
    actualEmail:new FormControl(),
    email: new FormControl([],
      this.emailValidator),
    emailConfirm: new FormControl([],
      this.emailValidator),
  });

  constructor(private JWTservice: JWTService, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserByName(this.JWTservice.getUser()).subscribe(val => this.setUser(val));

  }

  setUser(user: any){

    this.unchangedUser = user;

    this.userUpdateForm.controls['id'].patchValue(user.id);
    this.userUpdateForm.controls['userName'].patchValue(user.user);
    this.userUpdateForm.controls['actualEmail'].patchValue(user.email);

  }



  emailValidator(control: FormControl) { 
    
    if (control.parent) {
      let emailInputA = control.parent.get('email');

      let emailInputB = control.parent.get('emailConfirm');

      console.log(emailInputA.value);
      console.log(emailInputB.value);


      if (emailInputA.value != emailInputB.value && emailInputA.value.length > 0 ) {
        console.log("this executes");
        return { emailValidator: true }
      }
      else {

        return null;
      }
    }

  }

  passwordValidator(control: FormControl) { 
    
    if (control.parent) {
      let passwordInputA = control.parent.get('newPasswordConfirm');

      let passwordInputB = control.parent.get('newPassword')

      if (passwordInputA.value !== passwordInputB.value) {
        return { passwordValidator: true }
      }
      else {
        
        return null;
      }
    }
  }


  userNameTaken(){

    

    this.userService.getIsUsernameTaken(this.userUpdateForm.get('userName').value , this.unchangedUser.id).subscribe(val =>  this.validateUsername(val));

  }

  validateUsername(val){ 

    console.log(val);


    if(val){
      console.log("executed")
      this.userUpdateForm.get('userName').setErrors({'usernameTaken': true });
    }else{
      if (this.userUpdateForm.get('userName').hasError('usernameTaken')) {
        delete this.userUpdateForm.get('userName').errors['usernameTaken'];
        
      }
    }

  }

  actualPasswordIncorrect(){

    console.log(this.userUpdateForm.get('actualPassword').value);

    console.log(this.unchangedUser.password);
    
    if(this.userUpdateForm.get('actualPassword').value !== this.unchangedUser.password){
      this.userUpdateForm.get('actualPassword').setErrors({'actualPasswordIncorrect': true });
    }else{
      if (this.userUpdateForm.get('actualPassword').hasError('actualPasswordIncorrect')) {

        delete this.userUpdateForm.get('actualPassword').errors['actualPasswordIncorrect'];
      }
    }
    
    

  }





  updateUser(){

    let user = {
      id: this.userUpdateForm.get('id').value,
      user: this.userUpdateForm.get('userName').value,
      password: this.userUpdateForm.get('newPassword').value,
      email: this.userUpdateForm.get('email').value,

    }


    if(user.password == ""){
      user.password = this.userUpdateForm.get('actualPassword').value;
    }

    if(user.email == ""){
      user.email = this.userUpdateForm.get('actualEmail').value;
    }
    
    this.userService.updateUser(user).subscribe(val => console.log);

  }

}
