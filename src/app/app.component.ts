import { Component } from '@angular/core';
import { UserAuthenticationService } from './shared/service/user-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dms-gui';

  constructor(private userAuthenticationService: UserAuthenticationService) {}

  ngOnInit() {}
}
