import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isUserLoged:boolean=false

  constructor(private authService:AuthService , private router:Router)
{

}
 

ngOnInit(): void {
    //  this.isUserLoged =this.authService.isUserLoged
    this.authService.getUserLoged().subscribe(states=>
      {
        this.isUserLoged=states;
      })
  }


  Logout()
  {
      this.authService.LogOut()
      this.isUserLoged=this.authService.isUserLoged 
  
  }


}
