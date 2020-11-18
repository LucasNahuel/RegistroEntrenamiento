import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(user: string, password: string): void{

    // Initialize Params Object
    let params = new HttpParams();
  
    // Begin assigning parameters
    params = params.append('user', user);
    params = params.append('password', password);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      
    });
    let options = {headers:headers};
  
    this.http.post<any>("http://192.168.1.5:8080/login", params).subscribe(val => alert(val));
  
  }

}



