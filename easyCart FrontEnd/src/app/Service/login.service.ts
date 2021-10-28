import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerLogin } from '../Model/customer-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiServerUrl=environment.apiBaseUrl;
 
  constructor(private http:HttpClient) { }

  login(customer:CustomerLogin):Observable <any> {
    // const headers=new HttpHeaders().set("Content-Type","application/json")
     return this.http.post<any>(`${this.apiServerUrl}/customer/login`,customer);
   }
  // let token = localStorage.getItem('token');

  // let tokenStr='Easycart' +" "+ token;
  // const headers=new HttpHeaders().set("Content-Type","application/json").set("Authorization", tokenStr);

  
}
