export interface IDevice {
  name: string;
  type: string;
  currentOwner: string;
  lastLogin: Date;
}

export class UserDetails {
  token: string;
  username: string;

  constructor(token: string, username: string, office: string, authorities: Array<string>, groups: Array<string>) {
    this.token = token;
    this.username = username;
  }
}

