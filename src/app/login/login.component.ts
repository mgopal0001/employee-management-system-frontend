import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authSerivce: AuthService,
    private router: Router
  ) {
    this.createLoginForm();
  }

  loginForm: any;

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onLogin() {
    this.authSerivce.loginUser(this.loginForm.value).subscribe((res) => {
      console.log({ res });

      if (res.status === 200) {
        this.authSerivce.setToken(res.data.token);
        this.router.navigate(['/employees']);
      }
    });
  }
}
