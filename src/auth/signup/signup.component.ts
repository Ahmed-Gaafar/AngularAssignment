import { Component } from '@angular/core';
import { User } from '../Shared/User';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  NgForm=NgForm;
   
  User=new User("","","","")
  constructor(private authService : AuthService)
  {

  }
  submitData()
  {
    this.authService.enroll(this.User).subscribe({
      next:data=>console.log(data),
      error:error=> console.log(error)
      
    })
  }
}
