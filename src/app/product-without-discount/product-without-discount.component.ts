import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-product-without-discount',
  templateUrl: './product-without-discount.component.html',
  styleUrls: ['./product-without-discount.component.css']
})
export class ProductWithoutDiscountComponent {
  ProductList :IProduct[] |null=null;
constructor(private ProductService:ProductServiceService)
{
    this.ProductList= this.ProductService.GetNonDiscountedProduct();
}
}
