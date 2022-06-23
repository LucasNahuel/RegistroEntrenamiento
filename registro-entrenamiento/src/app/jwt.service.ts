import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})


//this class provides functionality for decoding jwt and retrieve 
//user info from it
export class JWTService {

  jwtToken: string;

  decodedToken: { [key: string]: string };

  constructor( private localStorageService: LocalStorageService) {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
      this.localStorageService.set('token', token);
    }
  }

  getToken(): string{
    return this.localStorageService.get('token');
  }

  decodeToken() {

    if (this.localStorageService.get('token')) {

      this.decodedToken = jwt_decode(this.localStorageService.get('token'));
    
    }
  }

  getDecodeToken() {
    return jwt_decode(this.localStorageService.get('token'));
  }
  
  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.sub : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();


    return this.decodedToken ? parseInt(this.decodedToken.exp) : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
    return true;
    }
  }


  removeToken(){
    this.jwtToken = null;
    this.decodedToken = null;
  }

}
