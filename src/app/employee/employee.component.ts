import { Component, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employeeForm: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.createEmployeeForm();
  }

  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      eid: [''],
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
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      (res) => {
        console.log({ res });
      },
      (error) => {
        console.log({ error });
      }
    );
  }
}
