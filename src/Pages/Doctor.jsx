import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Doctor = () => {
  const { id } = useParams();
  const [item, Setitem] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const {user} = useAuth0();
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/listdoctor')
        console.log(response);
        Setitem(response.data[id]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])
  const handleAddMeeting = async() => {
    togglePopup();
    try{
      const data = await axios.post('http://localhost:4000/handlemeeting',{doctorId:item._id,userId:user.sub,date:date,time:time});
      console.log(data.data);
    }catch(err){
      console.log('error in doctor frotnend',err);
    }
  
  }
  console.log(item);
  return (

    <div className=" m-24 space-y-12">
      <div className=" flex flex items-center space-y-8 ">
        <div className="flex items-center">
          <img className="border rounded-full h-56 w-56" src={item.image} alt="" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-3xl">{item.specialization}</span>
          <span className="text-3xl">Doctor {item.name}</span>
          <button onClick={togglePopup} className="border border-white p-2 rounded bg-red-500 text-white font-bold">Schedule Meeting</button>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg relative w-96 h-auto">
                <button
                  onClick={togglePopup}
                  className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black"
                >
                  &times;
                </button>
                <h2 className="text-2xl mb-4">Meeting Details</h2>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  className="block w-full mb-4 border-gray-300 rounded-md"
                />
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={handleTimeChange}
                  className="block w-full mb-4 border-gray-300 rounded-md"
                />
                <p>Doctor: {item.name}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                  onClick={handleAddMeeting}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-xl text-gray-700">Doctors are highly trained professionals responsible for maintaining and restoring human health through the practice of medicine. They diagnose and treat illnesses, injuries, and other health conditions through a combination of medical knowledge, clinical skills, and patient interaction. Doctors conduct physical examinations, order and interpret diagnostic tests, prescribe medications, and develop treatment plans. They also perform surgeries, provide preventive care, and offer health education to patients. Additionally, doctors often specialize in fields such as cardiology, pediatrics, or neurology, allowing them to focus on specific types of medical care. Their work involves continuous learning to keep up with medical advancements and a compassionate approach to patient care, ensuring they address both physical and emotional aspects of health.</p>
      </div>

    </div>
  )
}

export default Doctor
