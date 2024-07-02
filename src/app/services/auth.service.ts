import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your-backend-api-url';
  currentUser!: User;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      map(response => {
        this.currentUser = response.user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        return response;
      })
    );
  }
  changePassword(passwordData: { username: string, oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/change-password`, passwordData);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.role : null;
  }

  hasRole(role: string): boolean {
    const userRole = this.getUserRole();
    return userRole && userRole === role;
  }

}
