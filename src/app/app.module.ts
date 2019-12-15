import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DevicesComponent} from './components/devices/devices.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule,
  MatInputModule,
  MatOptionModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoginComponent} from './components/login/login/login.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { HttpInterceptorBasicAuthService } from './shared/service/http-interceptor-basic-auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { DevicesDataTableComponent } from './components/devices-data-table/devices-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    LoginComponent,
    LogoutComponent,
    DevicesDataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatSortModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //Activates our custom Http Interceptor
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
