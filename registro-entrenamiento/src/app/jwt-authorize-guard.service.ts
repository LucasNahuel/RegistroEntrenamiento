
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTService } from './jwt.service';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


//this class is a implementation of canActive who describes behavior for 
//a authorization guard for routing.
//every route marked as protected by this, should resolve the canActive method as
//true before it can be accessed

export class JwtAuthorizeGuardService implements CanActivate {

  constructor(private loginService: LoginService,
    private authStorageService: LocalStorageService,
    private jwtService: JWTService,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {

    if(this.jwtService.jwtToken){
      if (!this.jwtService.isTokenExpired()) {
        return true;
      }
    }
    this.router.navigate(['/login']);

  }
}
