"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo/Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ProductsProps, StateProps } from "../../types/type";
import FormattedPrice from "./formatPrice/FormatedPrice";
import { addUser, deletUser } from "@/redux/ShopSlice";


const Header = () => {
  const dispatch = useDispatch()
  const { data: session } = useSession();
  
  const {productData}= useSelector((state:StateProps)=>state.shopping);
  
  useEffect(()=>{
     if(session){
        dispatch(
          addUser({
          name:session?.user?.name,
          email:session?.user?.email,
          image:session?.user?.image,
        })
        );
     }else{
      dispatch(deletUser());
     }
  },[session, dispatch])

  const [totalAmount, setTotalAmount]= useState(0);

  useEffect(()=>{
     let amt= 0;
     productData.map((item:ProductsProps)=>{
      amt += item.price * item.quantity;
      return 
     })
     setTotalAmount(amt);
  },[productData])

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Search filed */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600  group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText  duration-100" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none  "
          />
        </div>
        {/*Login/Refister */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv ">
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        {/* Cart Button */}
      <Link href={"/cart"}>
      <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
          <AiOutlineShoppingCart className="text-xl" />
          <p className="text-sm font-semibold">
            <FormattedPrice amount={totalAmount ? totalAmount : 0} />
          </p>
          <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5  flex items-center justify-center shadow-xl shadow-black">
            {productData ? productData?.length : 0}
          </span>
        </div>
      </Link>
        {/*user  image */}
        {session && (
          <Image
            className="rounded-full object-cover"
            src={session?.user?.image as string}
            alt="useimage"
            width={50}
            height={50}
          />
        )}
        {/*logout button */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
