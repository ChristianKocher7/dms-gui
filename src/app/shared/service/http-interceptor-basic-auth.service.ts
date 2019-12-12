import { Injectable } from '@angular/core';
import { UserAuthenticationService } from './user-authentication.service';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private userAuthenticationService: UserAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    
    let basicAuthHeader = this.userAuthenticationService.getAuthenticatedToken();
    let username = this.userAuthenticationService.getAuthenticatedUser();
    //if both are not null
    if (basicAuthHeader && username) {
      console.log("intercept!")
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeader
        }
      })
    }
    return next.handle(request);
  }
}
