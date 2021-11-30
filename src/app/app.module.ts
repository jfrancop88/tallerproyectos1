import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './components/admin/auth/login/login.component';

import { CustomerDashboardComponent } from './components/customer/dashboard/dashboard.component';
import { CustomerRegisterComponent } from './components/customer/auth/register/register.component';
import { CustomerLoginComponent } from './components/customer/auth/login/login.component';
import { CustomerDetailComponent } from './components/customer/detail/detail.component';

import { EmployeeDashboardComponent } from './components/employee/dashboard/dashboard.component';
import { EmployeeLoginComponent } from './components/employee/auth/login/login.component';
import { EmployeeRegisterComponent } from './components/employee/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    CustomerDashboardComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerDetailComponent,
    EmployeeDashboardComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
