import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  domain: any;
  headers: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.domain = 'http://localhost:8000/';
  }

  createEmployee(body: any): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json', // Format set to JSON
      Authorization: this.authService.getToken(), // Attach token
    };
    return this.http.post(this.domain + 'employee/', body, {
      headers: this.headers,
    });
  }

  updateEmployee(body: any, id: any): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json', // Format set to JSON
      Authorization: this.authService.getToken(), // Attach token
    };
    return this.http.patch(this.domain + 'employee/' + id, body, {
      headers: this.headers,
    });
  }

  deleteEmployee(id: any): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json', // Format set to JSON
      Authorization: this.authService.getToken(), // Attach token
    };
    return this.http.delete(this.domain + 'employee/' + id, {
      headers: this.headers,
    });
  }

  getEmployee(id: any): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json', // Format set to JSON
      Authorization: this.authService.getToken(), // Attach token
    };
    return this.http.get(this.domain + 'employee/' + id, {
      headers: this.headers,
    });
  }

  getAllEmployees(): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json', // Format set to JSON
      Authorization: this.authService.getToken(), // Attach token
    };

    return this.http.get(this.domain + 'employee/all', {
      headers: this.headers,
    });
  }
}
