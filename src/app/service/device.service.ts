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

  constructor(private http: HttpClient) {
  }

  getAllDevices(): Observable<Array<IDevice>> {
    console.log("getting all devices");
    return this.http.get<Array<IDevice>>(this.dmsURL);
  }
}
