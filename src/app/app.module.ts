import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './Product/MainSection.component';
import { FooterComponent } from './Footer/Footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithoutDiscountComponent } from './product-without-discount/product-without-discount.component';
 


@NgModule({
  declarations: [							
    AppComponent, HeaderComponent,
      MainSectionComponent,
      FooterComponent,
      ParentComponent,
      ChildComponent,
      HomeComponent,
      UsersComponent,
      PostsComponent,
      NotFoundComponent,
      CommentComponent,
      ProductWithDiscountComponent,
      ProductWithoutDiscountComponent
   ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
