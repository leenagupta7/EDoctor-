import React,{useEffect}  from 'react'
import Home1 from '../Component/Home1'
import Service from '../Component/Service'
import Provide from '../Component/Provide'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar'

const Home = () => {
  
  return (
    <div className="">
      <Navbar />
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
