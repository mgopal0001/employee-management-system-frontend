import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, EmployeeComponent,LoginComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: Employee[] = [];
  constructor() {
    this.employees = [
      {
        eid: 1,
        name: 'madan',
        email: 'mgopal@gmail.com',
        phone: 12341234,
        designation: 'software',
        salary: 1234,
      },
      {
        eid: 2,
        name: 'gopal',
        email: 'gopal@gmail.com',
        phone: 12341234,
        designation: 'software',
        salary: 1234,
      },
    ];
  }

  //Delete the data from the array
  onClick(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }
}
