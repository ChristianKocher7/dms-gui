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
  columnDefinitions = [
    { def: 'timestamp', show: true },
    { def: 'deviceName', show: true },
    { def: 'modell', show: true },
    { def: 'benutzer', show: true },
    { def: 'os', show: false },
    { def: 'build', show: false },
    { def: 'cpu', show: false },
    { def: 'memory', show: false },
    { def: 'hardDisk', show: false },
    { def: 'installedBiosVersion', show: true },
    { def: 'biosDate', show: true },
    { def: 'seriennummer', show: true },
    { def: 'wartung', show: true },
    { def: 'vorherigerBenutzer1', show: false },
    { def: 'vorherigerBenutzer2', show: false },
    { def: 'teamviewerId', show: false }
  ];
  displayedColumns: string[] = ["timestamp", "deviceName", "modell", "benutzer", "os", "build", "cpu", "memory", "hardDisk", "installedBiosVersion", "biosDate", "seriennummer", "wartung", "vorherigerBenutzer1", "vorherigerBenutzer2", "teamviewerId"];
  dataSource = new MatTableDataSource(this.deviceArray);
  fulltextSearchValue = '';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.getAllDevices();
    this.displayedColumns = this.getDisplayedColumns();
    this.dataSource.data = this.deviceArray;
    this.dataSource.sort = this.sort;
  }

  search() {
    if (this.fulltextSearchValue != '') {
      this.deviceService.keyWordSearch(this.fulltextSearchValue).subscribe(devices => {
        this.deviceArray = devices;
      });
    } else {
      this.getAllDevices();
    }
  }

  getAllDevices() {
    this.deviceService.getAllDevices().subscribe(devices => {
      this.deviceArray = devices;
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

  getDisplayedColumns(): string[] {
    return this.columnDefinitions
      .filter(cd => cd.show)
      .map(cd => cd.def);
  }

  turnColumnOff(columnName: string){
    this.columnDefinitions.forEach(column => {
      if(column.def == columnName){
        column.show = !column.show;
      }
    });
    this.displayedColumns = this.getDisplayedColumns();
  }

  getMaintenanceClass(maintenance: Date): string {
    let maintenanceDate = new Date(maintenance);
    let today = new Date();
    let inThreeMonths = new Date(new Date().setDate(today.getDate()+90));
    let inSixMonths = new Date(new Date().setDate(today.getDate()+180));
    if(maintenanceDate < today) {
      return "maintenance-overdue";
    }else if(maintenanceDate > today && maintenanceDate < inThreeMonths){
      return "maintenance-critical"
    }else if( maintenanceDate > inThreeMonths && maintenanceDate < inSixMonths){
      return "maintenance-due"
    }else if(maintenanceDate > inSixMonths){
      return "maintenance-good"
    }
  }
}
