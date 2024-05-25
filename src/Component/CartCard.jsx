import React from 'react'
import ashwgandha from '../images/ashwgandha.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const CartCard = (props) => {
  return (
    <div className="flex flex-col w-56 border border-gray-300 p-4 rounded-lg space-y-2">
      <div className="font-bold text-xs text-white bg-green-500 w-16 rounded px-1">{props.off}% OFF</div>
      <div className="flex justify-center">
        <img className="h-22 w-20" src={props.image} alt="Ashwagandha" />
      </div>
      <div className="flex justify-between">
        <div className=" space-x-1 border border-gray-300 rounded-full px-2 flex items-center">
          <StarIcon style={{ fontSize: '16px', color: 'blue' }} />
          <span className="text-sm font-bold">5.0</span>
        </div>
        <div className="flex items-center justify-center border border-gray-500 rounded-full h-6 w-6">
          <FavoriteBorderIcon style={{ fontSize: '16px', color: 'gray' }} />
        </div>
      </div>
      <span className="font-semibold text-gray-800">{props.name}</span>
      <div className="flex space-x-2"><span className="flex items-center justify-center bg-blue-100 text-blue-400 text-xs rounded-full w-20">Ayush</span>
      <span className="flex items-center justify-center bg-blue-100 text-blue-400 text-xs rounded-full w-20">{props.category}</span></div>
      <div className="flex space-x-2 items-center">
        <p>${props.newprice}</p>
        <p className="text-xs text-gray-500 line-through">${props.actualprice}</p>
      </div>
      <span className="text-gray-500 italic">Mkt: Herbolab India Pvt Ltd</span>
      <button className="mt-2 bg-blue-500 text-white rounded-lg p-2 font-bold">ADD TO CART</button>

    </div>
  )
}

export default CartCard
