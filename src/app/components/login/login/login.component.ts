import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserAuthenticationService} from "../../../shared/service/user-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit() {
  }

  basicAuthLogin() {
    console.log("basicAuthLogin!");
    console.log(this.username)
    this.userAuthenticationService.authenticateUser(this.username, this.password)
    .subscribe(
      response => {
        console.log(response);
        console.log(this.userAuthenticationService.getAuthenticatedUser());
        console.log(this.userAuthenticationService.getAuthenticatedToken());
        this.router.navigate(['devices']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        console.log("error!")
        this.invalidLogin = true;
      }
    )
  }

}
