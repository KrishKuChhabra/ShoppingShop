import React from 'react'
import {  ProductsProps } from '../../../types/type';
import { getSingleProduct, getTrendingProducts } from '@/helpers';
import Container from '@/components/Container';
import ProductsData from '@/components/produtsbase/ProductsData';
import SingleProduct from '@/components/produtsbase/SingleProduct';

 type ProductPageProps ={
  searchParams: { [key: string]: string | string[] | undefined };
}
const ProductPage = async ({searchParams}:ProductPageProps) => {

    const _idString= searchParams?._id;
    const _id= Number(_idString);
    console.log(typeof _idString)
    const singleAcessProduct= getSingleProduct(_id)
    const data = await getTrendingProducts();
    console.log(singleAcessProduct)
    
  return (
    <div>
      <Container>
          <SingleProduct singleAcessProduct={singleAcessProduct} />
          <div>
             <p className='text-xl py-1 font-semibold'>Trending Products</p>
             <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
                {data?.map((item:ProductsProps)=>(
                    <ProductsData key={item._id} item={item} />
                ))}
             </div>
          </div>
     </Container> 
    </div>
  )
}

export default ProductPage;
