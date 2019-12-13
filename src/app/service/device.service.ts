import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDevice} from "../shared/types";
import {getFullPath, SERVICES_URLS} from "../config/config";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  dmsURL = getFullPath(SERVICES_URLS.devicesUrl);
  searchURL = getFullPath(SERVICES_URLS.fulltextSearchUrl);

  constructor(private http: HttpClient) {
  }

  getAllDevices(): Observable<Array<IDevice>> {
    console.log("getting all devices");
    return this.http.get<Array<IDevice>>(this.dmsURL);
  }

  keyWordSearch(keyword: string): Observable<Array<IDevice>> {
    console.log("searching with keyword " + keyword);
    return this.http.get<Array<IDevice>>(this.searchURL + keyword);
  }
}
