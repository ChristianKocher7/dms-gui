import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {getFullPath, SERVICES_URLS} from "../../config/config";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatiocationService {

  constructor(private httpClient: HttpClient) { }

  authenticateUser(): Observable<boolean> {
    return this.httpClient.get(getFullPath(SERVICES_URLS.userInfoUrl)).pipe(map((userDetails: any) => {
      const token = userDetails.details.tokenValue;
      return true;
      }
    ))
  }
}
