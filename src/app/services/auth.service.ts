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

 
  changePassword(passwordData: { username: string, oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post<any>(routeurls.BASE_API_URL  + '/change-password', passwordData);
  }
  /////
  login(form: any) : Observable<any>  {
    let credentials = form;//JSON.stringify(form.value);
    return this.http.post(routeurls.BASE_API_URL +  routeurls.LOGIN_URL, credentials);
  }
  getUserLogStatus() {
    const token = localStorage.getItem('jwt');
    if(token !=null){
      console.log('get user logged in -----------',this.getUser(), this.getrole());
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
  getmaincompanyid(){
    return localStorage.getItem("maincompanyid");
  }
  getmaincompanyname(){
    return localStorage.getItem("maincompanyname");
  
  }
  getrolefromtoken(token:any){
    return (this.jwtHelper.decodeToken(token)["role"]);
  }
  logout(){
    localStorage.removeItem('jwt');
  }
  ////////////

}
