import { Component, OnInit } from '@angular/core';
import { IPost } from '../Shared-Classes-and-types/Iproduct';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  PostsList:IPost[]=[];
  constructor(private productService :ProductServiceService ,private router :Router)
  {

  }
  ngOnInit() {
    this.productService.GetPostsData().subscribe((data)=>{
     console.log(data)
     this.PostsList=data
    });
  }

  selectedPost(post:any)
  {
    this.router.navigate(["/Post",post.id]);
  }
}
