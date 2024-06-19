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
        //console.log(response);
        SetDoctor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <Navbar/>
    <div className="flex h-screen">
      <div className="flex p-12 h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          Doctor.map((item, index) => (
            <Link key={index} to={`/doctor/${index}`}><div key={index} className="shadow-md py-4 px-4 flex flex-col items-center w-84 space-y-8 ">
              <div className="flex items-center">
                <img className="rounded-full h-56 w-56" src={item.image} alt="" />
              </div>
              <div className="w-96 p-4">
                <div className="flex justify-between">
                  <span>Name</span>
                  <span>{item.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialization</span>
                  <span>{item.specialization}</span>
                </div>
                <div className="flex justify-between">
                  <span>Collge Name</span>
                  <span>{item.college_name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>{item.experience} years</span>
                </div>
              </div>
            </div></Link>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default DoctorList
