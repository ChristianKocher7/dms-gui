import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceService} from "../../service/device.service";
import {IDevice} from "../../shared/types";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {saveAs} from 'file-saver';

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

  clear() {
    this.fulltextSearchValue = '';
    this.getAllDevices();
  }

  exportList() {
    if (!this.deviceArray || !this.deviceArray.length) {
      return;
    }

    let csv = this.displayedColumns.join(';');
    csv += 'obsolete';

    this.deviceArray.forEach((device) => {
      csv = csv + '\n';
      for (var p in device) {
        if (device.hasOwnProperty(p)) {
          csv += device[p] + ';';
        }
      }
    });

    const blob = new Blob(["\ufeff", csv], {type: 'text/csv'});
    saveAs(blob, "myFile.csv");
  }
}
