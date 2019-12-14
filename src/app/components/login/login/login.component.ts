import {Component, OnInit, ElementRef} from '@angular/core';
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

  constructor(private router: Router, 
              private userAuthenticationService: UserAuthenticationService,
              private elementRef: ElementRef) { }

  ngOnInit() {
  }

  basicAuthLogin() {
    this.userAuthenticationService.authenticateUser(this.username, this.password)
    .subscribe(
      response => {
        console.log(response.message);
        this.router.navigate(['devices']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
        this.username = '';
        this.password = '';
        
      }
    )
  }

}
