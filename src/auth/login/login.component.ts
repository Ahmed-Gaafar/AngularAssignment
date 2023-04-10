import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../Shared/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
isUserLoged:boolean=false;
User=new UserLogin("","")

constructor(private authService :AuthService , private router:Router ,private http: HttpClient)
{

}
  ngOnInit(): void {
     this.isUserLoged=this.authService.isUserLoged 
 }
// **********************************************

// Login()
// {
//    this.authService.Login("Ahmed","5588746")
//    this.isUserLoged=this.authService.isUserLoged 
//    this.router.navigate(["/Home"])

// }

// ********************************************

// Logout()
// {
//     this.authService.LogOut()
//     this.isUserLoged=this.authService.isUserLoged 

// }

submitLogin() {

  this.authService.login(this.User.userName,this.User.password).subscribe(
    (response) => {
      this.router.navigate(["/Products"]) 
      this.authService.isLogedSubject.next(true)
      this.authService.LoginWithToken("Ahmed","5588746")
      this.isUserLoged=this.authService.isUserLoged 
  
     },
    (error) => {
      alert("Invalid UserName Or Password")
    } 
    // error:error=> console.log(error) 
  )

}



}
