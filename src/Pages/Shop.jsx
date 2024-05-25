import React from 'react'
import homeopathy_1 from '../images/homeopathy_1.jpeg'
import ayurvedic from '../images/ayurvedic.png'
import vitamins_and_supplements_3 from '../images/vitamins_and_supplements_3.jpeg'
import sexual_health_supplements from '../images/sexual_health_supplements.png'
import diabetes_care_ayurveda from '../images/diabetes_care_ayurveda.png'
import diabetes_support from '../images/diabetes_support.png'
import weight_care from '../images/weight_care.png'
import women_care from '../images/womens_care.png'
import bone_and_joint_pain from '../images/bone_and_joint_pain_1.jpeg'
import cold_and_fever from '../images/cold_and_fever.png'
import ImageCarousel from '../Component/ImageCarousel'
import CartCard from '../Component/CartCard'
import himalaya from '../images/himalaya.jpg'
import dabur from '../images/dabur.jpg'
import digene from '../images/digene.jpg'
import inlife from '../images/inlife.jpg'
import gnc from '../images/gnc.jpg'
import Allproduct from '../Component/Allproduct'
const Shop = () => {
  return (
    <div className="my-16 flex flex-col space-y-8 items-center h-screen">
      <span className="font-semibold text-xl">Category</span>
      <div className="flex space-x-8">
        <img className="h-64" src={homeopathy_1} />
        <img className="h-64" src={ayurvedic} />
        <img className="h-64" src={vitamins_and_supplements_3} />
        <img className="h-64" src={sexual_health_supplements} />
        <img className="h-64" src={diabetes_care_ayurveda} />
      </div>
      <div className="p-4">
        <ImageCarousel />
      </div>
      <div className="flex justify-start">
        <span className="text-xl font-semibold">Popular Picks</span>
      </div>
      <div className="flex p-8 space-x-8">
        {Allproduct.map((item, index) => {
          return (<div>
            <CartCard off={item.off} newprice={item.newprice} name={item.name} actualprice={item.actualprice} category={item.category} image={item.image}/>
          </div>)
        })}
      </div>
      <span className="font-semibold text-xl">Health Concerns</span>
      <div className="flex space-x-8">
        <img className="h-64" src={diabetes_support} />
        <img className="h-64" src={weight_care} />
        <img className="h-64" src={women_care} />
        <img className="h-64" src={bone_and_joint_pain} />
        <img className="h-64" src={cold_and_fever} />
      </div>
      <span className="font-semibold text-xl">Popular Brands</span>
      <div className="p-12 flex items-center justify-around h-48 bg-gray-200 space-x-12">
        <div className=""><img className="h-40 " src={himalaya} alt=""/></div>
        <div className=""><img className="h-40 " src={dabur} alt=""/></div>
        <div className=""><img className="h-40 " src={digene} alt=""/></div>
        <div className=""><img className="h-40 " src={inlife} alt=""/></div>
        <div className=""><img className="h-40 " src={gnc} alt=""/></div>
      </div>
    </div>
  )
}

export default Shop
