import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../shared/types";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  dmsURL = 'http://localhost:8080/admin/devices';

  constructor(private http: HttpClient) {
  }

  getAllDevices(): Observable<Array<Device>> {
    console.log("getting all devices");
    return this.http.get<Array<Device>>(this.dmsURL);
  }
}
