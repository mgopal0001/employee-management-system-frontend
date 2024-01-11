import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from '../services/employee/employee.service';
import { error } from 'console';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [EmployeeService, AuthService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employeeForm: any;
  eid: any;
  mode = 'add';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createEmployeeForm();
    if (this.route.snapshot.params['id']) {
      this.mode = 'edit';
      this.eid = this.route.snapshot.params['id'];
      this.getEmployeeData(this.eid);
    }
  }

  getEmployeeData(eid: any) {
    this.employeeService.getEmployee(eid).subscribe((res) => {
      console.log({ res });
      let eData = res.data;
      this.employeeForm = this.fb.group({
        id: [eData.id],
        name: [eData.name],
        email: [eData.email],
        phone: [eData.phone],
        designation: [eData.designation],
        salary: [eData.salary],
      });
    });
  }

  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [],
      designation: [''],
      salary: [],
    });
  }

  onEmployeeSubmit() {
    // You can perform actions like sending data to a server or storing in a database here
    console.log('Submitted Data:', this.employeeForm.value);
    if (this.mode === 'add') {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe({
        next: (res) => {
          console.log({ res });
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.log({ error });
        },
      });
    } else if (this.mode === 'edit') {
      this.employeeService
        .updateEmployee(this.employeeForm.value, this.eid)
        .subscribe({
          next: (res) => {
            console.log({ res });
            this.router.navigate(['/employees']);
          },
          error: (error) => {
            console.log({ error });
          },
        });
    }
  }
}
