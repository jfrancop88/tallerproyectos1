import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './components/admin/auth/login/login.component';

import { CustomerDashboardComponent } from './components/customer/dashboard/dashboard.component';
import { CustomerRegisterComponent } from './components/customer/auth/register/register.component';
import { CustomerLoginComponent } from './components/customer/auth/login/login.component';
import { CustomerDetailComponent } from './components/customer/detail/detail.component';

import { EmployeeDashboardComponent } from './components/employee/dashboard/dashboard.component';
import { EmployeeLoginComponent } from './components/employee/auth/login/login.component';
import { EmployeeRegisterComponent } from './components/employee/auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },

  { path: 'customer', component: CustomerLoginComponent },
  { path: 'customer/register', component: CustomerRegisterComponent },
  { path: 'customer/dashboard', component: CustomerDashboardComponent },
  { path: 'customer/detail', component: CustomerDetailComponent },
  
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'employee/register', component: EmployeeRegisterComponent },
  { path: 'employee/dashboard', component: EmployeeDashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
