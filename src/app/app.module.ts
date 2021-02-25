import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


// import { LayoutModule } from '@angular/cdk/layout';
// import 'hammerjs';


// all app modules
import { MaterialModule } from './shared_modules/index';
import { AppRoutingModule } from './app-routing.module';

// all intercepters
import { JwtInterceptor, ErrorInterceptor } from './helpers';

// all services
import { SlotsService } from './services/index';
import { AppointmentService } from './services/appointments.service'


// all components
import { AppComponent } from './modules/app.component';
import { NavigationComponent } from './shared_components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
    // LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SlotsService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
