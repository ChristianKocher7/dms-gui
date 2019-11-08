import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {getFullPath, SERVICES_URLS, USER_AUTHENTICATION} from "../../config/config";
import {map} from "rxjs/operators";
import {UserDetails} from "../types";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticateUser(): Observable<boolean> {
    console.log('path: ' + SERVICES_URLS.userInfoUrl);
    return this.httpClient.get(getFullPath(SERVICES_URLS.userInfoUrl)).pipe(map((userDetails: any) => {
      console.log("the provider has answered the call for the user");
      const token = userDetails.details.tokenValue;
      const username = userDetails.userAuthentication.details.preferred_username;
      const office = userDetails.userAuthentication.details.office_code;
      const authorities = userDetails.userAuthentication.details.authorities;
      const groups = userDetails.userAuthentication.details.groups;
      const user = new UserDetails(token, username, office, authorities, groups);
      localStorage.setItem(USER_AUTHENTICATION.user, JSON.stringify(user));
      return true;
    }));
  }

  getUser(): UserDetails {
    return JSON.parse(localStorage.getItem(USER_AUTHENTICATION.user));
  }

  getUserToken(): string {
    const user = this.getUser();
    return user && user.token;
  }

  logout() {
    localStorage.removeItem(USER_AUTHENTICATION.user);
  }
}
