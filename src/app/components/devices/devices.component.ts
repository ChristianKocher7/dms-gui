import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceService} from "../../service/device.service";
import {IDevice} from "../../shared/types";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  deviceArray: IDevice[] = [];
  displayedColumns: string[] = ["name", "type", "currentOwner", "lastLogin"];
  dataSource = new MatTableDataSource(this.deviceArray);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getAllDevices().subscribe(devices => {
      console.log(devices);
      this.deviceArray = devices;
      console.log(this.deviceArray);
    });

    this.dataSource.data = this.deviceArray;
    this.dataSource.sort = this.sort;
  }

}
