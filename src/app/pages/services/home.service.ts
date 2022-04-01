import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../sign-up/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(  private http: HttpClient) { }

  register(client:User)  {
  return  this.http.post<User>('http://vcoronado-001-site12.dtempurl.com/api/Alta', client);
  }
}
