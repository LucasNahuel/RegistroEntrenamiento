import { ɵɵtrustConstantResourceUrl } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    ValidationErrors,
  } from '@angular/forms';



  import { Observable, of } from 'rxjs';
  import { map, catchError  } from 'rxjs/operators';
  import { UserService } from './user.service';
  
  export class UsernameValidator {
    static createValidator(userService: UserService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return userService
          .getUserByName(control.value)
          .pipe(
            map((result) =>
              result ? { usernameAlreadyExists: true } : null
            )
          )
             
            
      };
    }
  }