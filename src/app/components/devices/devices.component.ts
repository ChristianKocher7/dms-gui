import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../service/device.service";
import {IDevice} from "../../shared/types";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  deviceArray: IDevice[] = [];
  displayedColumns: string[] = ["name", "type", "currentOwner", "lastLogin"];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getAllDevices().subscribe(devices => {
      console.log(devices);
      this.deviceArray = devices;
      console.log(this.deviceArray);
    });
  }

}
