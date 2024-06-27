import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Component/Navbar';
import axios from 'axios';
import Message from '../Component/Message';
import Chart from "../Component/Chart";
import { CartContext } from '../Context';

const Patient = () => {
  const {Allproduct,cart} = useContext(CartContext);
  const Baseurl = import.meta.env.VITE_API_BASE_URL;
  const [patients, setPatients] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [index, setIndex] = useState(-1);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${Baseurl}/api/doctor/getuser`, {
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
      });
      setPatients(response.data);
      console.log('patients', response.data);
    } catch (err) {
      console.log('error in front', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const getRandomColorClass = () => {
    const colors = [
      'bg-red-500',
      'bg-green-500',
      'bg-blue-500',
      'bg-yellow-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div>
      <Navbar />
      <div className="pt-24 flex p-24 space-x-12">
        <div>
          {patients.map((item, index) => (
            <div
              onClick={() => { setSelectedUser(item._id); setIndex(index); }}
              className="cursor-pointer border p-4 "
              key={index}
            >
              <div className="flex items-center space-x-4 w-56">
                {item.picture ? (<img className="h-12 w-12 rounded-full" src={item.picture} />) : (<div className={`flex text-white ${getRandomColorClass()} h-12 w-12 rounded-full flex items-center justify-center  text-2xl`}>{item.name[0]}</div>)}
                <span>{item.name}</span>
              </div>

            </div>
          ))}
        </div>
        <div className="border p-12">
          {selectedUser ? (
            <div className="flex gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 p-4 border rounded-xl">
                  <h1 className="text-xl font-bold">Info</h1>
                  <div className="space-x-12">
                    <span>Name</span>
                    <span>{patients[index].name}</span>
                  </div>
                  <div className="space-x-12" s>
                    <span>Email</span>
                    <span>{patients[index].email}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-4 border rounded-xl">
                <h1 className="text-xl font-bold">Graph</h1>
                <Chart complete={patients[index].task.complete} remove={patients[index].task.remove} swap={patients[index].task.swap} />
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 border rounded-xl">
              <h1 className="text-xl font-bold">Cart</h1>
              {Allproduct.map((e, idx) => {
                  if (patients[index].cart[idx] > 0) {
                    return (
                      <div key={idx}>
                        <div className="grid grid-cols-6 gap-2 items-center py-2 text-gray-700 text-sm font-medium">
                          <img src={e.image} alt={e.name} className="h-12" />
                          <p>{e.name}</p>
                          <p>${e.newprice}</p>
                          <button className="w-12 h-12 border-2 border-gray-200 bg-white">{patients[index].cart[idx]}</button>
                          <p>${e.newprice * patients[index].cart[idx]}</p>
                        </div>
                        <hr className="h-1 bg-gray-200 border-0" />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <Message Id={selectedUser} />
            </div>

          ) : (
            <div>To start a conversation, select a user</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Patient;
