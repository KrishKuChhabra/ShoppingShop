import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return <Link href={"/"}>
     <h3 className='text-3xl font-semibold hover:text-orange-100 cursor-pointer duration-100'>ShoppingShop</h3>
  </Link>
}

export default Logo
