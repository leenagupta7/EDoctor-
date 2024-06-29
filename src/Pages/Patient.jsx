import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Component/Navbar';
import axios from 'axios';
import Message from '../Component/Message';
import Chart from "../Component/Chart";
import { CartContext } from '../Context';

const Patient = () => {
  const { Allproduct, cart } = useContext(CartContext);
  const Baseurl = import.meta.env.VITE_API_BASE_URL;
  const [patients, setPatients] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [index, setIndex] = useState(-1);
  const [bar,setbar] = useState(false);
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
      <div className="pt-24 flex flex-col lg:flex-row p-4 lg:p-24 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="flex-shrink-0 w-full lg:w-auto">
          {patients.map((item, idx) => (
            <div
              onClick={() => { setSelectedUser(item._id); setIndex(idx);setbar(false); }}
              className="cursor-pointer border p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              key={idx}
            >
              <div className="flex items-center space-x-4 w-full lg:w-56">
                {item.picture ? (
                  <img className="h-12 w-12 rounded-full" src={item.picture} alt={`${item.name}'s profile`} />
                ) : (
                  <div className={`flex text-white ${getRandomColorClass()} h-12 w-12 rounded-full flex items-center justify-center text-2xl`}>
                    {item.name[0]}
                  </div>
                )}
                <span className="font-semibold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border p-4 lg:p-12 w-full rounded-lg shadow-md">
          {selectedUser ? (
            <div className="gap-8">
              <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                  <div className="flex flex-col gap-2 p-4 border rounded-xl shadow-sm">
                    <h1 className="text-xl font-bold mb-2">Info</h1>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{patients[index].name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{patients[index].email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-4 border rounded-xl shadow-sm">
                    <h1 className="text-xl font-bold mb-2">Graph</h1>
                    <Chart complete={patients[index].task.complete} remove={patients[index].task.remove} swap={patients[index].task.swap} />
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                  <div className="flex flex-col gap-2 p-4 border rounded-xl shadow-sm">
                    <h1 className="text-xl font-bold mb-2">Cart</h1>
                    {Allproduct.map((e, idx) => {
                      if (patients[index].cart[idx] > 0) {
                        return (
                          <div key={idx}>
                            <div className="grid grid-cols-3 gap-2 items-center py-2 text-gray-700 text-sm font-medium">
                              <img src={e.image} alt={e.name} className="h-12" />
                              <p>{e.name}</p>
                              <button className="mx-8 w-12 h-12 border-2 border-gray-200 bg-white rounded-lg">{patients[index].cart[idx]}</button>
                            </div>
                            <hr className="h-1 bg-gray-200 border-0" />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                    <h1 className="text-xl font-bold mb-2">Relative</h1>
                    <div className="grid space-x-8 grid-cols-4 py-4 font-semibold items-center">
                      <span>Name</span>
                      <span>Relation</span>
                      <span>Phone No.</span>
                    </div>
                    <div>
                      {patients[index] && patients[index].list.map((item, idx) => (
                        <div className="grid grid-cols-3 items-center py-2" key={idx}>
                          <div className="rounded">{item.name}</div>
                          <div className="rounded">{item.relation}</div>
                          <div className="rounded">{item.phonenumber}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={()=>setbar(true)} className="my-8 w-full lg:w-auto p-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-400 transition-colors duration-300">Start Chatting</button>
             {bar? (<Message Id={selectedUser} />):(<></>)}
            </div>
          ) : (
            <div className="text-center text-gray-600">To start a conversation, select a user</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patient;
