import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { DeviceService } from 'src/app/service/device.service';

export interface DevicesDataTableItem {
  timestamp: Date;
  deviceName: string;
  model: string;
  deviceUser: string;
  os: string;
  build: string;
  cpu: string;
  memory: string;
  hardDisk: string;
  installedBiosVersion: string;
  biosDate: Date;
  serialNumber: string;
  maintenance: Date;
  previousUser1: string;
  previousUser2: string;
  teamviewerId: number;
}

/**
 * Data source for the DevicesDataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DevicesDataTableDataSource extends DataSource<DevicesDataTableItem> {
  data = new BehaviorSubject<DevicesDataTableItem[]>([]);
  paginator: MatPaginator;
  sort: MatSort;
  

  constructor(private deviceService: DeviceService) {
    super();
  }

  search(fulltextSearchValue: string) {
      this.deviceService.keyWordSearch(fulltextSearchValue).subscribe(devices => {
        console.log(devices);
        this.data.next(devices);
      });
  }

  getAllDevices() {
    console.log("getAllDevices()");
    this.deviceService.getAllDevices().subscribe(devices => {
      console.log(devices);
      this.data.next(devices);
    });
  }

  clear() {
    this.getAllDevices();
  }


  /*exportList() {
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
    //saveAs(blob, "myFile.csv");
  }*/

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DevicesDataTableItem[]> {
   
    return this.data;

    //return this.data;
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    /*console.log("connect()");
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData(this.data.value));
      
    }));*/
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DevicesDataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DevicesDataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'timestamp': return compare(a.timestamp, b.timestamp, isAsc);
        case 'deviceName': return compare(+a.deviceName, +b.deviceName, isAsc);
        case 'model': return compare(+a.model, +b.model, isAsc);
        case 'deviceUser': return compare(+a.deviceUser, +b.deviceUser, isAsc);
        case 'os': return compare(+a.os, +b.os, isAsc);
        case 'build': return compare(+a.build, +b.build, isAsc);
        case 'cpu': return compare(+a.cpu, +b.cpu, isAsc);
        case 'memory': return compare(+a.memory, +b.memory, isAsc);
        case 'hardDisk': return compare(+a.hardDisk, +b.hardDisk, isAsc);
        case 'installedBiosVersion': return compare(+a.installedBiosVersion, +b.installedBiosVersion, isAsc);
        case 'biosDate': return compare(+a.biosDate, +b.biosDate, isAsc);
        case 'serialNumber': return compare(+a.serialNumber, +b.serialNumber, isAsc);
        case 'maintenance': return compare(+a.maintenance, +b.maintenance, isAsc);
        case 'previousUser1': return compare(+a.previousUser1, +b.previousUser1, isAsc);
        case 'previousUser2': return compare(+a.previousUser2, +b.previousUser2, isAsc);
        case 'teamviewerId': return compare(+a.teamviewerId, +b.teamviewerId, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
