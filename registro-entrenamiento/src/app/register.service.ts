import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  Register(user: string, password: string, email: string): void{

    // Initialize Params Object
    let params = new HttpParams();
  
    // Begin assigning parameters
    params = params.append('user', user);
    params = params.append('password', password);
    params = params.append('email', email);


    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      
    });
    let options = {headers:headers};
  
    //yet to implement in the api
    this.http.post<any>("http://192.168.1.5:8080/register", params).subscribe(val => alert(val));
  
  }

}
