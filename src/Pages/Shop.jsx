import React,{useState,useEffect, useContext} from 'react'
import ImageCarousel from '../Component/ImageCarousel'
import CartCard from '../Component/CartCard'
import { CartContext } from '../Context';
import Navbar from '../Component/Navbar';

const Shop = () => {

  const {addbtn,Allproduct,removebtn,favbtn,nonfavbtn,cart,favourite} = useContext(CartContext)
 
  return (
    <div>
      <Navbar/>
    <div className="my-8 flex flex-col space-y-8 items-center h-screen">
      <div className="p-4">
        <ImageCarousel />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Allproduct.map((item, index) => {
          return (<div key={index}>
            <CartCard index={index} off={item.off} newprice={item.newprice} name={item.name} actualprice={item.actualprice} category={item.category} image={item.image} addbtn={addbtn} removebtn={removebtn} cart ={cart} favbtn={favbtn} nonfavbtn={nonfavbtn} favourite={favourite}/>
          </div>)
        })}
      </div>
    </div>
    </div>
  )
}

export default Shop
