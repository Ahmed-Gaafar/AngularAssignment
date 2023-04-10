import { Injectable, OnInit } from '@angular/core';
import { DiscountOffers, ICategory, IPost, IProduct, IUser } from '../Shared-Classes-and-types/Iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  

  private ProductList:IProduct[];
  constructor(private http: HttpClient) {
    this.ProductList = [{ID:1,Name:'IPhone',Quantity:5,Price:12000,Img:"./assets/IPhone.jpg",Discount:DiscountOffers['10%'],IsPurshased:true ,IsDiscount:true},
                        {ID:2,Name:'Samsung Galaxy ',Quantity:8,Price:15000,Img:"./assets/Samsung.jpg",Discount:DiscountOffers['15%'],IsPurshased:true,IsDiscount:true},
                        {ID:3,Name:'OPPO',Quantity:12,Price:8000,Img:"./assets/OPPO.jpg",Discount:DiscountOffers['10%'],IsPurshased:true,IsDiscount:true},
                        {ID:3,Name:'Reno 7',Quantity:9,Price:13000,Img:"./assets/Reno.jpg",Discount:DiscountOffers['No Discount'],IsPurshased:true,IsDiscount:false}];
   
                      }
   GetAllProducts():IProduct[]{
        return this.ProductList;
   }
   GetProductById(prdId:number):IProduct | null{
      let Product = this.ProductList.find(prod=>prod.ID==prdId);
      return Product? Product : null;
   }
   GetDiscountedProduct():IProduct[] | null{
    let Product = this.ProductList.filter(prod=>prod.IsDiscount==true);
    return Product? Product : null;
 }

 GetNonDiscountedProduct():IProduct[] | null{
  let Product = this.ProductList.filter(prod=>prod.IsDiscount==false);
  return Product? Product : null;
}

  GetUsersData(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe(catchError((err)=>{
            return throwError(()=>err.message||"Server Erorr")
    }))
  }

  GetPostsData():Observable<IPost[]>
  {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server Erorr")
}))
  }

  GetPostComment(id:any):Observable<IPost[]>
  {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server Erorr")
  }))
} 

}
