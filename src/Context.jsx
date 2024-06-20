import React,{createContext,useState,useEffect} from 'react';
import Allproduct from './Component/Allproduct';
import axios from 'axios'

const CartContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
      cart[index] = 0;
  }
  return cart;
}
const getDefaultFav = () => {
  let favourite = {};
  for (let index = 0; index < 300 + 1; index++) {
      favourite[index] = false;
  }
  return favourite;
}
const Baseurl=import.meta.env.VITE_API_BASE_URL;
const CartProvider = ({children})=>{
    const [cart,setCart] = useState(getDefaultCart());
    const [favourite,setFavourite] = useState(getDefaultFav());
    const addbtn = async(index) => {
      console.log('fafjaa;faf',index);
      
        try{
          const data = await axios.post(`${Baseurl}/api/users/addproduct`,{index:index},{
            headers: {
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },})
          console.log(data.data.cart);
          setCart(data.data.cart);
        }catch(err){
          console.log('err in addproduct f',err);
        }
    }
    const removebtn = async(index) => {
      console.log('fafjaa;faf',index);
      
        try{
          const data = await axios.post(`${Baseurl}/api/users/removeproduct`,{index:index},{
            headers: {
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },});
          console.log(data.data.cart);
          setCart(data.data.cart);
        }catch(err){
          console.log('err in remove product f',err);
        }
    }
    const getproduct = async () => {
          const data = localStorage.getItem('user');
          if(data==='User'){
          try {
              const { data } = await axios.get(`${Baseurl}/api/users/getproduct`,{
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },});
              setCart(data.cart);
              setFavourite(data.favourite);
          } catch (err) {
              console.log('Error in getproduct:', err);
          }
      }
  };
  useEffect(() => {
   
      getproduct();
    
  }, []);

    const favbtn=async(index)=>{
      
        try{
          const data = await axios.post(`${Baseurl}/api/users/favproduct`,{index:index},{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },})
          console.log(data.data);
          setFavourite(data.data.favourite);
        }catch(err){
          console.log('err in addproduct f',err);
        }
    }
    const nonfavbtn = async(index) => {
      console.log('fafjaa;faf',index);
      
        try{
          const data = await axios.post(`${Baseurl}/api/users/nonfavproduct`,{index:index},{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },})
          console.log(data.data.cart);
          setFavourite(data.data.favourite);
        }catch(err){
          console.log('err in remove product f',err);
        }
    }


    const getTotalCartAmount = () => {
      let totalAmount = 0;
      Allproduct.forEach((product, index) => {
          if (cart[index] > 0) {
              totalAmount += product.newprice * cart[index];
          }
      });
      return totalAmount;
  }

    const getTotalCartItem = () => {
      let totalItem = 0;
      for (const item in cart) {
          if (cart[item] > 0) {
              totalItem += cart[item];
          }
      }
      return totalItem;
  }

    const contextValue = {
        Allproduct,
        nonfavbtn,
        favbtn,
        getproduct,
        removebtn,
        addbtn,
        cart,
        favourite,
        getTotalCartAmount,
        getTotalCartItem,
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };