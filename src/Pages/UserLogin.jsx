import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthContext } from "../AuthContext";

const Baseurl = import.meta.env.VITE_API_BASE_URL;
const UserLogin = () => {
    const [underline, setUnderline] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!email || !password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    } else if (underline && !name) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 8 characters long.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const endpoint = underline ? '/signup' : '/login';
      const response = await axios.post(`${Baseurl}/api/users${endpoint}`, {
        name: underline ? name : undefined,
        email,
        password,
      });

      const responseData = response.data;
      //console.log('hey',responseData);
      if (responseData.success) {
        localStorage.clear();
        setAuthUser(responseData);
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user',"User");
        localStorage.setItem('Id',responseData.data.user.id);
        Swal.fire({
          title: 'Success!',
          text: underline ? 'You have successfully signed up!' : 'You have successfully logged in!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          setName('');
          setEmail('');
          setPassword('');
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: responseData.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.log({ error: 'occur in frontend', details: error });
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleChange = () => {
    setUnderline(!underline);
  };
  return (
    <div>
       <form onSubmit={handleSubmit} className="p-8 bg-white space-y-12 rounded-xl">
        <div className="flex flex-col space-y-6">
          {underline && (
            <div className="flex justify-between items-center">
              <label className=" w-1/4">Name</label>
              <input
                className="w-3/4 p-2 rounded border border-gray-400"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <label className=" w-1/4">Email</label>
            <input
              className="w-3/4 p-2 rounded border border-gray-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className=" w-1/4">Password</label>
            <input
              className="w-3/4 p-2 rounded border border-gray-400"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {underline?(<p className=" tracking-wider">Already have an account?{' '}<span  onClick={handleChange} className=" cursor-pointer  underline text-green-500 ">
            SignIn
          </span></p>):(<p className=" tracking-wider">Don't have an account?{' '}<span  onClick={handleChange} className=" cursor-pointer  underline text-green-500 ">
            SignUp
          </span></p>)}
          <div className="flex justify-center">
            <button
              className=" bg-green-500 px-4 py-1 rounded hover:bg-green-500 text-xl hover:text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserLogin
