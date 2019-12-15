import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDevice} from "../shared/types";
import {getFullPath, SERVICES_URLS} from "../config/config";
import { DevicesDataTableItem } from '../components/devices-data-table/devices-data-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  dmsURL = getFullPath(SERVICES_URLS.devicesUrl);
  searchURL = getFullPath(SERVICES_URLS.fulltextSearchUrl);

  constructor(private http: HttpClient) {
  }

  getAllDevices(): Observable<Array<DevicesDataTableItem>> {
    console.log("getting all devices");
    return this.http.get<Array<DevicesDataTableItem>>(this.dmsURL);
  }

  keyWordSearch(keyword: string): Observable<Array<DevicesDataTableItem>> {
    console.log("searching with keyword " + keyword);
    return this.http.get<Array<DevicesDataTableItem>>(this.searchURL + keyword);
  }

}
