import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  Register(user: string, password: string, email: string): any{

    // Initialize Params Object
    let params = new HttpParams();
  
    // Begin assigning parameters
    params = params.append('User', user);
    params = params.append('password', password);
    params = params.append('Email', email);

    
    return this.http.post<any>(environment.apiUrl+"register", params);
  
  }

}
