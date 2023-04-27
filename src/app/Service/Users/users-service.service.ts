import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/user/getalluser")
  }
  adduser(user:any){
    return this.http.post<any>("http://localhost:8080/user/create",user,this.httpOptions) }
}
