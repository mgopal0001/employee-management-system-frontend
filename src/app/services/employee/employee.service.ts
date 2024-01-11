import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  domain: any;
  headers: any;

  constructor(private http: HttpClient) {
    this.domain = 'localhost:8000/';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', // Format set to JSON
      // 'authorization': this.authService.authToken // Attach token
    });
  }

  createEmployee(body: any): Observable<any> {
    return this.http.post(this.domain + 'employee/', body, {
      headers: this.headers,
    });
  }

  updateEmployee(body: any, id: any): Observable<any> {
    return this.http.put(this.domain + 'employee/' + id, body, {
      headers: this.headers,
    });
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.post(this.domain + 'employee/' + id, {
      headers: this.headers,
    });
  }

  getEmployee(id: any): Observable<any> {
    return this.http.get(this.domain + 'employee/' + id, {
      headers: this.headers,
    });
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.domain + 'employees');
  }
}
