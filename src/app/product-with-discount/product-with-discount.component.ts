import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { IProduct } from '../Shared-Classes-and-types/Iproduct';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.css']
})
export class ProductWithDiscountComponent {
  ProductList :IProduct[] |null=null;
constructor(private ProductService:ProductServiceService)
{
    this.ProductList= this.ProductService.GetDiscountedProduct();
}

}
