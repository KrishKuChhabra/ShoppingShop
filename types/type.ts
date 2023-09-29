export interface ProductsProps{
   _id:number;
   title:string;
   isNew:boolean;
   oldPrice:number;
   price:number;
   description:string;
   category:string;
   image:string;
   rating:number;
   quantity:number;
}

export interface ItemProps{
    item:ProductsProps;
}
export interface StateProps{
  shopping:{
    productData:[],
    userInfo:{},
    orderData:{
      order:ProductsProps[];
    }
  }
}

export interface AmountPriceProps{
    amount:number
}

export type ProductPageProps={
  [x: string]: any;
  searchParams:{[key:string]:string | string[] | undefined}
}