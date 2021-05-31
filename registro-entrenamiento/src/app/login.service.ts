import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material';
import { CredentialErrorDialogComponent } from './dialogs/credential-error-dialog/credential-error-dialog.component';
import { environment } from './../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(user: string, password: string): any{

    // Initialize Params Object
    let params = new HttpParams();
  
    // Begin assigning parameters
    params = params.append('user', user);
    params = params.append('password', password);


  
    return this.http.post<any>(environment.apiUrl+"login", params);
  
  }

}



