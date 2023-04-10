import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges {
 ngOnChanges(changes: SimpleChanges): void {
  
 }
 ProductList :IProduct[]=[];
//  ChildProductList :IProduct[]=[];
 constructor()
 {
   
 }
 GetData(ProductList :IProduct[])
 {
    this.ProductList = ProductList;
     console.log(this.ProductList);
 }

 Buy(index:number){
    

  this.ProductList[index].Quantity -= 1 ;
  if( this.ProductList[index].Quantity==0)
  {
    this.ProductList[index].IsPurshased=false;
  }
}
}
