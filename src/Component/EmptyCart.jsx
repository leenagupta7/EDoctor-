import React, { useContext } from 'react'
import emptycart from '../images/emptycart.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context';
import Navbar from './Navbar';

const EmptyCart = () => {
    const { favourite, Allproduct } = useContext(CartContext);
    return (
        <div>
            <Navbar/>
        <div className="flex flex-col bg-green-100 h-screen p-12 space-y-20">
            <span className="text-2xl">My Cart</span>
            <div className="flex flex-col items-center justify-center space-y-4">
                <img className="h-36" src={emptycart} alt="" />
                <span>Your Cart is empty!</span>
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-gray-500 text-sm">You have no items added in the cart.</p>
                    <p className="text-gray-500 text-sm">Explore and add products you like!</p>
                </div>
                <Link to="/shop"> <button className="mt-2 bg-green-blue text-white rounded-lg p-2 font-bold w-40" >
                    ADD TO CART
                </button></Link>
            </div>
            <div className="bg-white p-4 flex flex-col space-y-2">
                <p className="text-gray-500 text-sm ">Favourite Items</p>
                {Allproduct.map((item, index) => (
                    <div key={index}>
                        {favourite[index] === true ? (
                        <div className="flex  items-center justify-around" key={index}>
                            <img className="h-12" src={item.image} alt="" />
                            <h2 className="text-gray-800">{item.name}</h2>
                            <p>${item.newprice}</p>
                        </div>
                        ):<></>}
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default EmptyCart
