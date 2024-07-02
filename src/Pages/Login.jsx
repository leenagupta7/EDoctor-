import React, { useState } from 'react';
import UserLogin from './UserLogin';
import AddDoctor from './AddDoctor';

const Login = () => {
  const [underline, setUnderline] = useState(true);
  const handleChange = () => {
    setUnderline(!underline);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-green-400 gap-8">
      <h1 className="text-white text-4xl underline decoration-white">Registration Form</h1>
      <div className="text-white text-2xl flex justify-around mb-4 space-x-12">
          <span
            className={`cursor-pointer ${underline ? 'underline decoration-white' : ''}`}
            onClick={handleChange}
          >
            User
          </span>
          <span
            className={`cursor-pointer ${!underline ? 'underline decoration-white' : ''}`}
            onClick={handleChange}
          >
            Doctor
          </span>
        </div>
        {underline?(<UserLogin/>):(<AddDoctor/>)}
    </div>
  );
};

export default Login;
