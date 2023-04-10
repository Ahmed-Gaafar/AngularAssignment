// IProduct interface

export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
    Discount : DiscountOffers  ;
    IsPurshased :Boolean;
    IsDiscount:Boolean;
  }
// *****************************************
  export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  }
  // **********************************************
  export interface IPost{
    userId: number,
    id: number,
    title: string,
    body: String
  }

  // ICategory interface
  export interface ICategory {
    ID: number;
    Name: string;
  }
  
  // DiscountOffers enum
  export enum DiscountOffers {
    "No Discount" = "",
    "10%" = ".10",
    "15%" = ".15",
  }

  