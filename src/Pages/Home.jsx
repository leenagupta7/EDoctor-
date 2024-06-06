import React from 'react'
import Home1 from '../Component/Home1'
import Chart from '../Component/Chart'
import Service from '../Component/Service'
import Provide from '../Component/Provide'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div className="">
    <div className="xs:2 sm:4 p-6">
      <Home1/>
      <Service/>
      <Provide/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home
