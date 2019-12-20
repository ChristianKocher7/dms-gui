export interface IDevice {
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
  obsolete: boolean;
}
