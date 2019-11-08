import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserAuthenticationService} from "../../../shared/service/user-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private router: Router, private authenticationService: UserAuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authenticationService.authenticateUser();
    console.log(this.authenticationService.getUser());
    console.log(this.authenticationService.getUserToken());
    this.router.navigate(['/devices']);
  }

}
