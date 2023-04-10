import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './Shared/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _Url:string="http://localhost:3000/enroll"
     apiUrl = "http://localhost:3000/login"

  isLogedSubject:BehaviorSubject<boolean>
  constructor(private http:HttpClient) {
    this.isLogedSubject=new BehaviorSubject<boolean>(this.isUserLoged)
   }

  LoginWithToken(UserName:string,Password:string)
  {
    let userToken='55876632';
    localStorage.setItem("token",userToken)
    this.isLogedSubject.next(true);
  }

  LogOut()
  {
        localStorage.removeItem("token");
        this.isLogedSubject.next(false);
  }
get isUserLoged():boolean
   {
    return (localStorage.getItem('token'))? true : false ;

  }

  getUserLoged() : Observable<boolean>
  {
    return this.isLogedSubject.asObservable()
  }

  enroll(user:User)
  {
     return  this.http.post(this._Url,user); 
  }

  login(userName: string, password: string) {
    return this.http.post(this.apiUrl, { userName, password });
  }
}
