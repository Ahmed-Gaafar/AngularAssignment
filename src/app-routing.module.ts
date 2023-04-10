import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { MainSectionComponent } from './app/Product/MainSection.component';
import { UsersComponent } from './app/users/users.component';
import { PostsComponent } from './app/posts/posts.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { CommentComponent } from './app/comment/comment.component';
import { ProductWithDiscountComponent } from './app/product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './app/product-without-discount/product-without-discount.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/Gaurds/auth.guard';
import { AuthModule } from './auth/auth.module';

const routes :Routes =[
  {path: '' , redirectTo : '/Home' ,pathMatch:'full'},
  {path: 'Home' , component:HomeComponent},
  {path: 'Products' , component:MainSectionComponent,
   children:[
    {path:'ProductWithDiscount',component:ProductWithDiscountComponent},
    {path:'ProductWitouthDiscount',component:ProductWithoutDiscountComponent}
   ]},
  {path: 'Users' , component:UsersComponent,canActivate:[AuthGuard]},
  {path: 'Posts' , component:PostsComponent },
  {path: 'Post/:id' , component:CommentComponent},
  {path: 'Register' , component:SignupComponent},
  {path: 'Login' , component:LoginComponent},
  {path: 'Logout' , component:LoginComponent},
  {path: '**' , component:NotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
