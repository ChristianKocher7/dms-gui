export interface IDevice {
  timestamp: Date;
  name: string;
  modell: string;
  benutzer: string;
  os: string;
  build: string;
  cpu: string;
  memory: string;
  hardDisk: string;
  installedBiosVersion: string;
  biosDate: Date;
  seriennummer: string;
  wartung: Date;
  vorherigerBenutzer1: string;
  vorherigerBenutzer2: string;
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

