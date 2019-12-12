import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DevicesComponent} from './components/devices/devices.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
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

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    LoginComponent
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
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
