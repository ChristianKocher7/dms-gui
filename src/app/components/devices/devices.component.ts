import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../service/device.service";
import {Device} from "../../shared/types";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  deviceArray: Device[] = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getAllDevices().subscribe(devices => {
      this.deviceArray = devices;
    })
  }

}
