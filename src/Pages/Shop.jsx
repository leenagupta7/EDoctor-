import React,{useState,useEffect} from 'react'
import ImageCarousel from '../Component/ImageCarousel'
import CartCard from '../Component/CartCard'
import Allproduct from '../Component/Allproduct'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
const Shop = () => {
  const { user } = useAuth0();
  const [cart,setCart] = useState([]);
  const [favourite,setFavourite] = useState([]);
  const addbtn = async(index) => {
    console.log('fafjaa;faf',index);
    if(user){
      try{
        const data = await axios.post('http://localhost:4000/addproduct',{index:index,userId:user.sub})
        console.log(data.data.cart);
        setCart(data.data.cart);
      }catch(err){
        console.log('err in addproduct f',err);
      }}
  }
  const removebtn = async(index) => {
    console.log('fafjaa;faf',index);
    if(user){
      try{
        const data = await axios.post('http://localhost:4000/removeproduct',{index:index,userId:user.sub})
        console.log(data.data.cart);
        setCart(data.data.cart);
      }catch(err){
        console.log('err in remove product f',err);
      }}
  }
  const getproduct = async () => {
    if (user) {
        try {
            const { data } = await axios.get(`http://localhost:4000/getproduct/${user.sub}`);
            setCart(data.cart);
            setFavourite(data.favourite);
        } catch (err) {
            console.log('Error in getproduct:', err);
        }
    }
};
  const favbtn=async(index)=>{
    if(user){
      try{
        const data = await axios.post('http://localhost:4000/favproduct',{index:index,userId:user.sub})
        console.log(data.data);
        setFavourite(data.data.favourite);
      }catch(err){
        console.log('err in addproduct f',err);
      }}
  }
  const nonfavbtn = async(index) => {
    console.log('fafjaa;faf',index);
    if(user){
      try{
        const data = await axios.post('http://localhost:4000/nonfavproduct',{index:index,userId:user.sub})
        console.log(data.data.cart);
        setFavourite(data.data.favourite);
      }catch(err){
        console.log('err in remove product f',err);
      }}
  }
  useEffect(()=>{
    getproduct();
  },[])
  return (
    <div className="my-16 flex flex-col space-y-8 items-center h-screen">
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
  )
}

export default Shop
