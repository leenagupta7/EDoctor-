import React from 'react'
import instagram_icon from '../images/instagram_icon.png'
import whatsapp_icon from '../images/whatsapp_icon.png'
import pintester_icon from '../images/pintester_icon.png'

const Footercomponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8 ">
      <div className="flex items-center gap-5">
        {/* <img src={footer_logo} alt="logo" className="w-16 md:w-24" /> */}
        <p className="text-gray-800 text-2xl md:text-4xl font-bold">EDoctor</p>
      </div>
      <ul className="flex list-none gap-12 text-gray-800 text-sm md:text-base">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-3 bg-gray-100 border border-gray-200 rounded">
          <img src={instagram_icon} alt="instagram" className="w-6 h-6" />
        </div>
        <div className="p-3 bg-gray-100 border border-gray-200 rounded">
          <img src={pintester_icon} alt="pintester" className="w-6 h-6" />
        </div>
        <div className="p-3 bg-gray-100 border border-gray-200 rounded">
          <img src={whatsapp_icon} alt="whatsapp" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full mb-8 text-gray-800 text-sm md:text-base">
        <hr className="w-4/5 mx-auto border-none rounded h-1 bg-gray-800" />
        <p>Copyright © 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footercomponent