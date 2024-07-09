import R from '../images/R.png'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DoneIcon from '@mui/icons-material/Done';
import dot from '../images/dotgreen.png'
const Home1 = () => {
  return (
    <div className="flex justify-around py-16 shadow-md">
      <div className="flex pt-16 flex-col space-y-4">
        <h2 className="md:text-4xl lg:text-6xl text-gray-600 text-2xl">Book Quick</h2>
        <h2 className=" text-2xl md:text-4xl lg:text-6xl">Therapy Session</h2>
        <div>
          <p className="text-gray-600 text-sm lg:text-xl">
            You are not alone. Every step forward is a victory.</p>
          <p className="text-gray-600 text-sm lg:text-xl"> Seek support and know that brighter days are ahead.</p>
        </div>
        <button className="bg-green-blue p-2 text-white font-bold rounded w-44 hover:bg-white hover:text-green-blue hover:border border-green-blue">Get Services</button>
      </div>
      <div className="hidden md:relative h-96 w-96 md:flex md:items-center md:justify-center">
        <div className="absolute z-0 h-80 w-80 bg-green-blue rounded-full"></div>
        <div className="relative z-20 h-20 bg-white rounded flex right-28 bottom-20 shadow-md">
          <div className="flex space-x-2 text-black items-center w-44 items-center justify-center">
            <GroupsIcon style={{ color: "rgb(46, 200, 150)" }} />
            <div>
              <p className="font-bold text-xl">1520+</p>
              <p className="text-gray-700 text-sm">Activate Clients</p>
            </div>
          </div>
        </div>
        <div className="relative z-20 shadow-md h-20 bg-white flex flex-col justify-center p-1 top-12 left-12">
          <div className="flex">
            <DoneIcon style={{ color: "rgb(46, 200, 150)" }} />
            <div>
              <p className="text-sm text-gray-500">Get 20% off on every</p>
              <p className="text-sm text-gray-500">last month</p>
            </div>
          </div>
          <div className="flex">
            <DoneIcon style={{ color: "rgb(46, 200, 150)" }} />
            <p className="text-sm text-gray-500">Expert Doctors</p>
          </div>
        </div>
        <img className="absolute z-10 top-0 left-0 h-full w-full object-cover" src={R} alt="" />
      </div>
    </div>
  )
}

export default Home1
