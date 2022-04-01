import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(client:User):  Observable<User>  {

/*     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
 */
    return  this.http.post<User>('http://vcoronado-001-site12.dtempurl.com/api/Alta', client);
  }
}
