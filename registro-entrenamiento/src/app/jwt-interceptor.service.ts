import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { JWTService } from './jwt.service'

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

  constructor( private authService: JWTService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.authService.jwtToken;

    req = req.clone({
    url:  req.url,
    setHeaders: {
    Authorization: `Bearer ${token}`
    }
    });
    return next.handle(req);

  }
}