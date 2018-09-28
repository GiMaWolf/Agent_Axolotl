import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestService {

  private url: string = 'https://backendaxolotl.herokuapp.com';

  constructor(public http: HttpClient) { }

  getMainViewData(): Observable<any>{
    return this.http.get(this.url + "/fleet").pipe(
      map((res: Response) => {
        return res;
      })
    )
  }

  getSelectViewData(): Observable<any>{
    return this.http.get(this.url + "/components").pipe(
      map((res: Response) => {
        return res;
      })
    )
  }

  getPartViewData(): Observable<any>{
    return this.http.get(this.url + "/components/fuel-pump").pipe(
      map((res: Response) => {
        return res;
      })
    )
  } 

  getComponentDetails(vehicles: string): Observable<any>{
    return this.http.get(this.url + "/components/fuel-pump/details?vehicles=" + vehicles).pipe(
      map((res: Response) => {
        return res;
      })
    )
  } 
}
