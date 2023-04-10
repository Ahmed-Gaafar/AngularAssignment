import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  @Output() SendProductList : EventEmitter<IProduct[]>;
   ProductList:IProduct[];
  constructor(private productService :ProductServiceService)
  {
    this.SendProductList = new EventEmitter<IProduct[]>();
    this.ProductList = this.productService.GetAllProducts();


    console.log(this.ProductList)  
  }
  ngOnInit(): void {

  }
  
  SendtList()
  {
    this.SendProductList.emit(this.ProductList)
  }
}
