import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  domain: any;
  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json', // Format set to JSON
      // 'authorization': this.authService.authToken // Attach token
    });
  }

  loginUser(body: any) {
    return this.http.post(this.domain + 'login', body, this.headers).subscribe(
      (res) => {
        console.log({ res });
      },
      (error) => {
        console.log({ error });
      }
    );
  }
}
