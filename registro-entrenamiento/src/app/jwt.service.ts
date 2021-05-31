import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})


//this class provides functionality for decoding jwt and retrieve 
//user info from it
export class JWTService {

  jwtToken: string;

  decodedToken: { [key: string]: string };

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {

    if (this.jwtToken) {

      this.decodedToken = jwt_decode(this.jwtToken);
    
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwtToken);
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
    return false;
    }
  }
}
