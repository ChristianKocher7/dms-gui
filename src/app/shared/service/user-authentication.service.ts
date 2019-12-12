import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {getFullPath, SERVICES_URLS, USER_AUTHENTICATION} from "../../config/config";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http: HttpClient) {
  }

  authenticateUser(username, password): Observable<string> {
    console.log("authenticateUser!");
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthHeader);
    console.log(username + " " + password)
    let header = new HttpHeaders({
      Authorization: basicAuthHeader
    });
    return this.http.get<string>(getFullPath(SERVICES_URLS.basicAuthUrl), {headers: header}).pipe(
      map(
        response => {
          console.log(response);
          sessionStorage.setItem(USER_AUTHENTICATION.user, username);
          sessionStorage.setItem(USER_AUTHENTICATION.token, basicAuthHeader);
          return response;
        }
      )
    );
  }

  getAuthenticatedUser(): string {
    console.log("getAuthenticateUser!");
    return sessionStorage.getItem(USER_AUTHENTICATION.user);
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      console.log("getAuthenticatedToken!")
      return sessionStorage.getItem(USER_AUTHENTICATION.token);
    }
    return null;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(USER_AUTHENTICATION.user);
    return user !== null;
  }

  logout() {
    sessionStorage.removeItem(USER_AUTHENTICATION.user);
    sessionStorage.removeItem(USER_AUTHENTICATION.token);
  }
}
