import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your-backend-api-url';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
  changePassword(passwordData: { oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/change-password`, passwordData);
  }
}
