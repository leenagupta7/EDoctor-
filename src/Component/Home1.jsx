import React from 'react'
import ladynurse from '../images/ladynurse.jpeg'
const Home1 = () => {
  return (
    <div className='border flex m-10'>
      <div><span className="text-6xl text-blue-500">Your Health is our Focus </span></div>
      <img className='h-96' src={ladynurse}/>
    </div>
  )
}

export default Home1
