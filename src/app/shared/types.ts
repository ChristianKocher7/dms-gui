export interface IDevice {
  timestamp: Date;
  name: string;
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

export class UserDetails {
  token: string;
  username: string;

  constructor(token: string, username: string, office: string, authorities: Array<string>, groups: Array<string>) {
    this.token = token;
    this.username = username;
  }
}

