import React, { useContext } from 'react'
import { CartContext } from '../Context'
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import Navbar from './Navbar';

const FullCart = () => {
  const {cart,removebtn,getTotalCartAmount,Allproduct}=useContext(CartContext);
  const Baseurl = import.meta.env.VITE_API_BASE_URL;
  const makePayment = async () => {
    const totalAmount = getTotalCartAmount();
    try {
        const stripe = await loadStripe("pk_test_51PM57nRvV5nwz6UhGMpbqvjkxcogrTunxBXLBO7AFFoNO0y4LqmTeXaJa27NbWDQLitLEgHrTa3JE4KecW2798ep00pLEIZcdk");
        const response = await axios.post(`${Baseurl}/api/stripe/checkout-session`, { totalAmount, cart, Allproduct });
        const sessionId = response.data.id;
        const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
        });
        if (result.error) {
            console.error('Stripe redirect error:', result.error.message);
        }
    } catch (err) {
        console.log('make payment error', err);
    }
};
  return (
    <div>
        <Navbar/>
    <div className="mt-24 mx-12 md:mx-44">
        <div className="grid grid-cols-6 gap-8 items-center py-2 text-gray-700 text-sm font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className="h-1 bg-gray-200 border-0" />
        {Allproduct.map((e,index) => {
            if (cart[index] > 0) {
                return (
                    <div key={index}>
                        <div className="grid grid-cols-6 gap-8 items-center py-2 text-gray-700 text-sm font-medium">
                            <img src={e.image} alt="" className="h-12" />
                            <p>{e.name}</p>
                            <p>${e.newprice}</p>
                            <button className="w-16 h-12 border-2 border-gray-200 bg-white">{cart[index]}</button>
                            <p>${e.newprice * cart[index]}</p>
                            <ClearIcon className="w-4 cursor-pointer" onClick={() => { removebtn(index) }}/>
                        </div>
                        <hr className="h-1 bg-gray-200 border-0" />
                    </div>
                )
            }
            return null;
        })}
        <div className="flex mt-24 space-x-20">
            <div className="flex-1 flex flex-col space-y-10">
                <h1>Cart Totals</h1>
                <div>
                    <div className="flex justify-between py-4">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-4">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="flex justify-between py-4">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={makePayment} className="w-64 h-14 bg-red-500 text-white text-sm font-semibold">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
    </div>
)
}

export default FullCart
