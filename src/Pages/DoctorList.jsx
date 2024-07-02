import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const DoctorList = () => {
  const [Doctor, SetDoctor] = useState([]);
  const Baseurl=import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Baseurl}/api/doctor/listdoctor`)
        SetDoctor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])
  const BookDoctor = async(id) => {
    try{
      const response = await axios.post(`${Baseurl}/api/doctor/bookdoctor`,{doctorId:id},{
        headers: {
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
        },});
      console.log(response);
    }catch(err){
      console.log('err in bookdoctor frontend',err);
    }
  }
  return (
    <div>
      <Navbar/>
    <div className="flex h-screen jusify-center items-center">
      <div className="flex justify-center p-12 h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          Doctor.map((item, index) => (
            <div key={index} ><div key={index} className="shadow-md py-4 px-4 flex flex-col items-center w-84 space-y-8 ">
              <div className="flex items-center">
                <img className="rounded-full h-24 w-24 md:h-56 md:w-56" src={item.image} alt="" />
              </div>
              <div className=" p-4">
                <div className="flex space-x-24 justify-between">
                  <span>Name</span>
                  <span>{item.name}</span>
                </div>
                <div className="flex space-x-24 justify-between">
                  <span>Specialization</span>
                  <span>{item.specialization}</span>
                </div>
                <div className="flex space-x-24 justify-between">
                  <span>Collge Name</span>
                  <span>{item.college_name}</span>
                </div>
                <div className="flex space-x-24 justify-between">
                  <span>Experience</span>
                  <span>{item.experience} years</span>
                </div>
                <Link to={`/doctor/${index}`} className="cursor-pointer flex flex-col items-center justify-between pt-4" onClick={() => BookDoctor(item._id)}>
                  <div >
                    <span className="bg-blue-500 p-2 rounded-md font-bold text-white">Book Doctor</span>
                </div>
                </Link>
              </div>
            </div></div>
          ))
        }
        {/* //Link to={`/doctor/${index}`} */}
      </div>
    </div>
    </div>
  )
}

export default DoctorList
