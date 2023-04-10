import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogoutComponent,
   

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[FormsModule],
})
export class AuthModule { }
