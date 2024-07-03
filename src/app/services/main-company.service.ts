import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from '../models/user.model';
import { map,catchError,retry  } from 'rxjs/operators';
import { routeurls } from '../routeurls/routeurls';
@Injectable({
  providedIn: 'root'
})
export class MainCompanyService {
    constructor(private http:HttpClient) { }
    Add(formval : any): Observable<any>{
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'});
          let options = { headers: headers };
        //let header = headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        return this.http.post(routeurls.BASE_API_URL + routeurls.MAIN_COMPANY_URL,formval,options)
      }
      getAll(): Observable<any> {
        return this.http.get<any>(routeurls.BASE_API_URL + routeurls.MAIN_COMPANY_URL + "/getall").pipe(
          retry(3),
          map(res => {
            console.log(res);
            if (!res) {
              throw new Error('Value expected!');
            }
            console.log(res);
            return res;
          }),
          catchError(err => of([]))
        );
      }

      getbyid(id: any): Observable<any> {
        return this.http.get<any>(routeurls.BASE_API_URL + routeurls.MAIN_COMPANY_URL + "/getbyid", { params: new HttpParams().set('MainCompanyID', id) })
        .pipe(
          retry(3),
          map(res => {
            console.log(res);
            if (!res) {
              throw new Error('Value expected!');
            }
            console.log(res);
            return res;
          }),
          catchError(err => of([]))
        );
      }
    
      update(id: any, obj: any): Observable<any> {
        obj.Id = id;
        console.log(obj);
        return this.http.put<any>(routeurls.BASE_API_URL + routeurls.MAIN_COMPANY_URL , obj)
        .pipe(
          retry(3),
          map(res => {
            console.log(res);
            if (!res) {
              throw new Error('Value expected!');
            }
            console.log(res);
            return res;
          }),
          catchError(err => of([]))
        );
      }
      delete(id: any): Observable<any> {
        return this.http.delete<any>(routeurls.BASE_API_URL + routeurls.MAIN_COMPANY_URL , { params: new HttpParams().set('MainCompanyID', id) });
      }
}