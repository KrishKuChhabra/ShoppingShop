"use client"

import { useSelector } from "react-redux";
import { ProductsProps, StateProps } from "../../../types/type";
import FormattedPrice from "../formatPrice/FormatedPrice";
import { useEffect, useState } from "react";
import Link from "next/link";

const PaymentForm = () => {
  const {productData, userInfo}= useSelector((state:StateProps)=>state.shopping);
  
  const [totalAmount, setTotalAmount]= useState(0)
  useEffect(()=>{
    let amt= 0;
    productData.map((item:ProductsProps)=>{
     amt += item.price * item.quantity;
     return 
    })
    setTotalAmount(amt);
 },[productData])

  return (
    <div className="w-full bg-white p-4">
       <h2>Cart Totals</h2>
       <div className="border-b-[1px] border-b-slate-300 py-2 ">
         <div className="max-w-lg flex items-cente justify-between">
            <p className="uppercase font-medium">SubTotal</p>
            <p><FormattedPrice amount={totalAmount} /></p>
         </div>
       </div>
       <div className="border-b-[1px] border-b-slate-300 py-2 ">
         <div className="max-w-lg flex items-cente justify-between">
            <p className="uppercase font-medium">Shipping</p>
            <p><FormattedPrice amount={20} /></p>
         </div>
       </div>
       <div className="border-b-[1px] border-b-slate-300 py-2 ">
         <div className="max-w-lg flex items-cente justify-between">
            <p className="uppercase font-medium">Total Price</p>
            <p><FormattedPrice amount={totalAmount + 20} /></p>
         </div>
       </div>
       {userInfo ? (
          <Link href={'/success'}>
        <button
          className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200"
        >
          Proceed to checkout
        </button>
        </Link>
      ) : (
        <div>
        
          <button  className="bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-not-allowed duration-200">
            Proceed to checkout
          </button>
        
          <p className="text-base mt-1 text-red-500 font-semibold animate-bounce">
            Please login to continue
          </p>
        </div>
      )}
    </div>
  )
}

export default PaymentForm
