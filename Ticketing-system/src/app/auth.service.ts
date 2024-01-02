import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   baseurl:any="http://localhost/"


  constructor(private httpclient:HttpClient) {}

 
  login(data:any) {
    return this.httpclient.post('${this.baseurl}/login', data);
  }

 }
