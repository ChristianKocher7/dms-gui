import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DevicesDataTableDataSource, DevicesDataTableItem } from './devices-data-table-datasource';
import { DeviceService } from 'src/app/service/device.service';
import { IDevice } from 'src/app/shared/types';

@Component({
  selector: 'app-devices-data-table',
  templateUrl: './devices-data-table.component.html',
  styleUrls: ['./devices-data-table.component.scss']
})
export class DevicesDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DevicesDataTableItem>;
  dataSource: DevicesDataTableDataSource;

  fulltextSearchValue = '';
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
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

  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.dataSource = new DevicesDataTableDataSource(this.deviceService);
    
    this.dataSource.getAllDevices();
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  search() {
    if (this.fulltextSearchValue != '') {
      this.dataSource.search(this.fulltextSearchValue);
    }
    else {
      this.dataSource.getAllDevices();
    }
  }

  clear() {
    this.fulltextSearchValue = '';
    this.dataSource.clear();
  }
  
}
