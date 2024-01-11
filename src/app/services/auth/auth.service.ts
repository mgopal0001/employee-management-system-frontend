import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  domain: any;
  authToken: any;
  headers: any;

  constructor(private http: HttpClient) {
    this.domain = 'http://localhost:8000/';
  }

  loginUser(body: any): Observable<any> {
    this.headers = {
      'Content-Type': 'application/json',
    };
    return this.http.post(this.domain + 'admin/login', body, this.headers);
  }

  getToken() {
    return `Bearer ${localStorage.getItem('token')}`; // Get token and asssign to variable to be used elsewhere
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
  }

  setToken(token: any) {
    localStorage.setItem('token', token); // Set token in local storage
    this.authToken = token; // Assign token to be used elsewhere
  }
}
