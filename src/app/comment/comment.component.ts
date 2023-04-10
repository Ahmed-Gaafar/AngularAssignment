import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { IPost } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
PostId:any;
CommentList:IPost[]=[];
erorrMessage:any;
constructor(private activatedRoute : ActivatedRoute , private productService:ProductServiceService ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
        this.PostId=params.get("id");
    })
    this.productService.GetPostComment(this.PostId).subscribe({
      next:data=>this.CommentList=data,
      error:erorr=>this.erorrMessage=erorr
  })
}

}
