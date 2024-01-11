import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { EmployeeService } from '../services/employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [EmployeeService, AuthService],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      if (res.status === 200) {
        console.log({ res });

        this.employees = res.data;
      }
    });
  }

  //Delete the data from the array
  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: (res) => {
        this.loadEmployeeList();
      },
      error: (error) => {
        console.log({ error });
      },
    });
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }

  addEmployee() {
    this.router.navigate(['/add-employee']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
