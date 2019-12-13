import {Component, Input, OnInit, SimpleChange, ViewChild} from '@angular/core';
import {DeviceService} from "../../service/device.service";
import {IDevice} from "../../shared/types";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  deviceArray: IDevice[] = [];
  displayedColumns: string[] = ["timestamp", "name", "modell", "benutzer", "os", "build", "cpu", "memory", "hardDisk", "installedBiosVersion", "biosDate", "seriennummer", "wartung", "vorherigerBenutzer1", "vorherigerBenutzer2", "teamviewerId"];
  dataSource = new MatTableDataSource(this.deviceArray);
  fulltextSearchValue = '';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.getAllDevices();
    this.dataSource.data = this.deviceArray;
    this.dataSource.sort = this.sort;
  }

  search() {
    if (this.fulltextSearchValue != '') {
      this.deviceService.keyWordSearch(this.fulltextSearchValue).subscribe(devices => {
        console.log(devices);
        this.deviceArray = devices;
        //this.isLoadingResults = false;
        console.log(this.deviceArray);
      });
    } else {
      this.getAllDevices();
    }
  }

  getAllDevices() {
    this.deviceService.getAllDevices().subscribe(devices => {
      console.log(devices);
      this.deviceArray = devices;
      //this.isLoadingResults = false;
      console.log(this.deviceArray);
    });
  }

}
