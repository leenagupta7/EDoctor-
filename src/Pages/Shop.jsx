import React from 'react'
import coldandflu from '../images/coldandflumedicine.webp'
import Allergy from '../images/Allergy.webp'
import Painmanagement from '../images/Painmanagement.webp'
import HomeHealth from '../images/HomeHealth.webp'
import FirstAid from '../images/FirstAid.webp'
import Childrenmedicine from '../images/Childrenmedicine.webp'
import nutritionandmanagement from '../images/nutritionandmanagement.webp'

const Shop = () => {
  return (
    <div className="my-16 flex-col space-y-8 justify-center h-screen">
        <div className="flex">
            <img className="h-52" src={coldandflu}/>
            <img className="h-52" src={Allergy}/>
            <img className="h-52" src={Painmanagement}/>
            <img className="h-52" src={HomeHealth}/>
            <img className="h-52" src={FirstAid}/>
            <img className="h-52" src={Childrenmedicine}/>
        </div>
        <div className="flex">
            <img className="h-52" src={nutritionandmanagement}/>
            <img className="h-52" src={Allergy}/>
            <img className="h-52" src={Painmanagement}/>
            <img className="h-52" src={HomeHealth}/>
            <img className="h-52" src={FirstAid}/>
            <img className="h-52" src={Childrenmedicine}/>
        </div>
     

    </div>
  )
}

export default Shop
