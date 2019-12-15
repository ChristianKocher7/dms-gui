import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevicesComponent} from "./components/devices/devices.component";
import {DevicesDataTableComponent} from "./components/devices-data-table/devices-data-table.component";
import {LoginComponent} from "./components/login/login/login.component";
import { AuthenticationGuardService } from './shared/service/authentication-guard.service';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'devices',
    component: DevicesDataTableComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthenticationGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
