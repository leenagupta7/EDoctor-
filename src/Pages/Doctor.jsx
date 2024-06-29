import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import Message from '../Component/Message';

const Doctor = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const Baseurl = import.meta.env.VITE_API_BASE_URL;

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
        const response = await axios.get(`${Baseurl}/api/doctor/listdoctor`, {
          headers: {
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
        });
        setItem(response.data[id]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddMeeting = async () => {
    togglePopup();
    try {
      const data = await axios.post(`${Baseurl}/api/users/handlemeeting`, {
        doctorId: item._id,
        date: date,
        time: time,
      }, {
        headers: {
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log('error in doctor frontend', err);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const minDate = getCurrentDate();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-4 lg:flex lg:flex-row h-screen lg:p-24 lg:space-x-12">
        <div className="flex flex-col flex-grow basis-2/3 space-y-8">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center justify-center">
              <img className="h-24 w-24 border rounded-full lg:h-56 lg:w-56" src={item.image} alt="" />
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-2">
              <span className="text-lg lg:text-2xl font-semibold">{item.specialization}</span>
              <span className="text-lg lg:text-2xl font-semibold">Doctor {item.name}</span>
              <button onClick={togglePopup} className="px-4 py-2 border border-white rounded bg-red-500 text-white font-bold hover:bg-red-600 transition-colors duration-300">Schedule Meeting</button>
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
                    <button
                      onClick={togglePopup}
                      className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black"
                    >
                      &times;
                    </button>
                    <h2 className="text-2xl mb-4 font-bold">Meeting Details</h2>
                    <label htmlFor="date" className="block font-medium">Date:</label>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      onChange={handleDateChange}
                      className="block w-full mb-4 border-gray-300 rounded-md"
                      min={minDate}
                    />
                    <label htmlFor="time" className="block font-medium">Time:</label>
                    <input
                      type="time"
                      id="time"
                      value={time}
                      onChange={handleTimeChange}
                      className="block w-full mb-4 border-gray-300 rounded-md"
                    />
                    <p className="text-lg font-medium mb-4">Doctor: {item.name}</p>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                      onClick={handleAddMeeting}
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-700">
            <p className="text-sm lg:text-lg">
              Doctors are highly trained professionals responsible for maintaining and restoring human health through the practice of medicine. They diagnose and treat illnesses, injuries, and other health conditions through a combination of medical knowledge, clinical skills, and patient interaction. Doctors conduct physical examinations, order and interpret diagnostic tests, prescribe medications, and develop treatment plans. They also perform surgeries, provide preventive care, and offer health education to patients. Additionally, doctors often specialize in fields such as cardiology, pediatrics, or neurology, allowing them to focus on specific types of medical care. Their work involves continuous learning to keep up with medical advancements and a compassionate approach to patient care, ensuring they address both physical and emotional aspects of health.
            </p>
          </div>
        </div>
        <Message Id={item._id} />
      </div>
    </div>
  );
};

export default Doctor;
