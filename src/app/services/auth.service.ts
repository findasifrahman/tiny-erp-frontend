import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { routeurls } from '../routeurls/routeurls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'your-backend-api-url';
  currentUser!: User;

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) {}

  /*login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user).pipe(
      map(response => {
        this.currentUser = response.user;
        localStorage.setItem('user', JSON.stringify(this.currentUser));
        return response;
      })
    );
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
  }*/

  changePassword(passwordData: { username: string, oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/change-password`, passwordData);
  }
  /////
  login(form: any) : Observable<any>  {
    let credentials = form;//JSON.stringify(form.value);
    return this.http.post(routeurls.BASE_API_URL +  routeurls.LOGIN_API_BASE_URL, credentials);
  }
  getUserLogStatus() {
    const token = localStorage.getItem('jwt');
    if(token !=null){
      console.log('get user logged in -----------');
      return !this.jwtHelper.isTokenExpired(token);
    }
    else return false;
  }
  getToken() {
    return localStorage.getItem("jwt");
  }
  getUser(){
    let token = localStorage.getItem("jwt");
    return (this.jwtHelper.decodeToken(token)["user"]);
  }
  getrole() {
    let token = localStorage.getItem("jwt");
    return (this.jwtHelper.decodeToken(token)["role"]);
  }
  getrolefromtoken(token:any){
    return (this.jwtHelper.decodeToken(token)["role"]);
  }
  logout(){
    localStorage.removeItem('jwt');
  }
  ////////////

}
