import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IUser } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  UsersList: IUser[]=[];
  erorrMessage:any;
  constructor(private productService :ProductServiceService )
  {
   
  }

  // ngOnInit() {
  //    this.productService.GetUsersData().subscribe((data)=>{
  //     console.log(data)
  //     this.UsersList=data
  //    });
  // }

  ngOnInit() {
    this.productService.GetUsersData().subscribe({
      next:data=>this.UsersList=data,
      error:erorr=>this.erorrMessage=erorr
    });
 }


}
