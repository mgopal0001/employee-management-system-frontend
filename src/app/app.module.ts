// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './services/employee/employee.service';
import { AuthService } from './services/auth/auth.service';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Add other modules as needed
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,

    // Add other components as needed
  ],
  providers: [EmployeeService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
