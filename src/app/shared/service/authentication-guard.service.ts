import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {getFullPath, SERVICES_URLS} from "../../config/config";
import {UserAuthenticationService} from "./user-authentication.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private userAuthenticationService: UserAuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.userAuthenticationService.getUserToken();

    if (token) {
      return this.jwtHelper.isTokenExpired(token) ? this.clearToken() : true;
    }

    return this.userAuthenticationService.authenticateUser().pipe(catchError(() => this.clearToken()));
  }

  clearToken(): Observable<boolean> {
    this.userAuthenticationService.logout();
    window.location.href = getFullPath(SERVICES_URLS.loginUrl);
    return of(false);
  }
}
