import { getProducts } from '@/helpers'
import React from 'react'
import Container from '../Container'
import ProductsData from './ProductsData'
import { ItemProps, ProductsProps } from '../../../types/type'

const Products = async() => {
    const produts= await getProducts();
  return ( 
      <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10 '>
          {
            produts?.map((item:ProductsProps)=>(
                // eslint-disable-next-line react/jsx-key
                <ProductsData item={item} key={item._id} />
            ))
          }
      </Container>
  )
}

export default Products
