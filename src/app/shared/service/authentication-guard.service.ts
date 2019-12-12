import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {getFullPath, SERVICES_URLS} from "../../config/config";
import {UserAuthenticationService} from "./user-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{


  constructor(private userAuthenticationService: UserAuthenticationService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userAuthenticationService.isUserLoggedIn()) {
      return true;
    } 
    else {
      this.router.navigate(['login']);
    }
    return false;
  }

  
}
