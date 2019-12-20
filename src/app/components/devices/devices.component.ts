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
  displayedColumns = ["timestamp", 
                      "deviceName", 
                      "model", 
                      "deviceUser", 
                      "os", "build", 
                      "cpu", "memory", 
                      "hardDisk", 
                      "installedBiosVersion", 
                      "biosDate", 
                      "serialNumber", 
                      "maintenance", 
                      "previousUser1", 
                      "previousUser2", 
                      "teamviewerId"];
  dataSource = new MatTableDataSource(this.deviceArray);
  fulltextSearchValue = '';
  isAsc: boolean = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true} ) sort: MatSort;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.getAllDevices();
    this.dataSource.data = this.deviceArray;
    this.sort.disableClear = true;
  }

  search() {
    if (this.fulltextSearchValue != '') {
      this.deviceService.keyWordSearch(this.fulltextSearchValue).subscribe(devices => {
        console.log(devices);
        this.deviceArray = devices;
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

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  sortArray(name: string) {
    this.isAsc = !this.isAsc;
      switch (name) {
        case 'timestamp': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'deviceName': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.deviceName < b.deviceName ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'deviceUser': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.deviceUser < b.deviceUser ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'model': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.model < b.model ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'os': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.os < b.os ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'build': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.build < b.build ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
        }
        case 'cpu': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.cpu < b.cpu ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'memory': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.memory < b.memory ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'deviceUser': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.deviceUser < b.deviceUser ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'hardDisk': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.hardDisk < b.hardDisk ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'installedBiosVersion': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.installedBiosVersion < b.installedBiosVersion ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'biosDate': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.biosDate < b.biosDate ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'serialNumber': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.serialNumber < b.serialNumber ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'maintenance': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.maintenance < b.maintenance ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'previousUser1': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.previousUser1 < b.previousUser1 ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        case 'previousUser2': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.previousUser2 < b.previousUser2 ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
        }
        case 'teamviewerId': {
          let array: IDevice[] = [];
          array = (this.deviceArray.sort((a, b) => (a.teamviewerId < b.teamviewerId ? -1 : 1) * (this.isAsc ? 1 : -1)));
          this.deviceArray = [];
          this.deviceArray.push.apply(this.deviceArray,array);
          break;
        }
        default: 
      }  
  }
}