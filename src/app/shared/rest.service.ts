import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestService {

  private url: string = 'http://localhost:5000';

  constructor(public http: HttpClient) { }

  getComponentDetails(vehicles: string): Observable<any>{
    return this.http.get(this.url + "/components/fuel-pump/details?vehicles=" + vehicles).pipe(
      map((res: Response) => {
        return res;
      })
    )
  } 
}
