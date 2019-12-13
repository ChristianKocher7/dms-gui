import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/shared/service/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userAuthenticationService: UserAuthenticationService,
              private router: Router) { 
    this.userAuthenticationService.logout();
    this.router.navigate(['login']);
              }

  ngOnInit() {}

}
