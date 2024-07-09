import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from '../models/user.model';
import { map,catchError,retry  } from 'rxjs/operators';
import { routeurls } from '../routeurls/routeurls';
@Injectable({
  providedIn: 'root'
})
export class OfficePurchaseItemListService {
    constructor(private http:HttpClient) { }
    Add(formval : any): Observable<any>{
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'});
          let options = { headers: headers };
        //let header = headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        return this.http.post(routeurls.BASE_API_URL + routeurls.OFFICE_PURCHASE_ITEM_LIST_URL,formval,options)
      }
      getAll(mid: any): Observable<any> {
        return this.http.get<any>(routeurls.BASE_API_URL + routeurls.OFFICE_PURCHASE_ITEM_LIST_URL + "/" + mid ).pipe(
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

      getbyid(id: number): Observable<any> {
        return this.http.get<any>(routeurls.BASE_API_URL + routeurls.OFFICE_PURCHASE_ITEM_LIST_URL + "/getbyid", { params: new HttpParams().set('id', id) })
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

      // const params = new HttpParams()
      //              .set('param1', param1Value)
      //              .set('param2', param2Value);
      update(id: any, obj: any): Observable<any> {
        obj.id = id;
        //console.log("update obj in service--", obj);
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'});
          let options = { headers: headers };
        console.log(obj);
        return this.http.post(routeurls.BASE_API_URL + routeurls.OFFICE_PURCHASE_ITEM_LIST_URL + "/update" , obj, options)
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
      delete(id: any, mid: any): Observable<any> {
        console.log("delete id--", id);
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'});
        return this.http.delete<any>(routeurls.BASE_API_URL + routeurls.OFFICE_PURCHASE_ITEM_LIST_URL ,{ params: new HttpParams().set('id', parseInt(id)).set('maincompanyid', mid) });
      }
}