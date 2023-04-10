import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DiscountOffers, ICategory, IProduct } from '../Shared-Classes-and-types/Iproduct';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-MainSection',
  templateUrl: './MainSection.component.html',
  styleUrls: ['./MainSection.component.css']
})
export class MainSectionComponent implements OnInit ,OnChanges {
  // Discount : DiscountOffers  ;
  StoreName :string ;
  StoreLogo :string;
  CategoryList: ICategory[];
  ClientName :string ;
  ProductList : IProduct[];
  ProductListFromApp : IProduct[]=[];
   // IsPurshased :Boolean;
  // IsDiscount:Boolean;
  constructor(private productService :ProductServiceService , private router :Router , private activatedRoute :ActivatedRoute  ) {
    // this.Discount = DiscountOffers['No Discount'],
    this.StoreName = "B.TECH";
    this.StoreLogo ="./assets/Phone.jpg";
    this.CategoryList=[{ID:1,Name:'Mobile'},{ID:2,Name:'TV'},{ID:3,Name:'Watches'},{ID:4,Name:'Accessories'}];
    this.ClientName='Ahmed';
    this.ProductList = this.productService.GetAllProducts();
    // this.IsPurshased=true
    // this.IsDiscount=false
   }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    this.renderValues();
  }

  ngOnInit() {
  }
  Buy(index:number){
    

    this.ProductList[index].Quantity -= 1 ;
    if( this.ProductList[index].Quantity==0)
    {
      this.ProductList[index].IsPurshased=false;
    }
  }

  renderValues()
  {
    this.ProductListFromApp = this.productService.GetAllProducts();
   }

   WithDiscount()
   {
    this.router.navigate(["ProductWithDiscount"],{relativeTo:this.activatedRoute})
   }

   WithoutDiscount()
   {
    this.router.navigate(["ProductWitouthDiscount"],{relativeTo:this.activatedRoute})

   }
}
