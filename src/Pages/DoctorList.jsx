import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const [Doctor, SetDoctor] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/listdoctor')
        console.log(response);
        SetDoctor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          Doctor.map((item, index) => (
            <Link to={`/doctor/${index}`}><div key={index} className="shadow-md py-12 px-4 flex flex-col items-center w-96 space-y-8 ">
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
  )
}

export default DoctorList
