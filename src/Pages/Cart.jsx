import React, { useContext } from 'react'
import { CartContext } from '../Context'
import EmptyCart from '../Component/EmptyCart';
import FullCart from '../Component/FullCart';

const Cart = () => {
  const {getTotalCartItem} = useContext(CartContext);
  
  return (
    <div>
      {getTotalCartItem()===0?(
        <EmptyCart/>
      ):(<FullCart/>)}
    </div>
  )
}

export default Cart
