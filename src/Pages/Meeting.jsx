import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from '../Component/Navbar';
import { useAuthContext } from '../AuthContext';

const Meeting = () => {
    const [meeting,setMeeting] = useState([]);
    const {authUser} = useAuthContext();
    const Baseurl=import.meta.env.VITE_API_BASE_URL;
    const fetchMeeting = async() => {
        const user = localStorage.getItem('user');
        if(authUser){
            try{
                let chooseUser = (user === 'User') ? 'users' : 'doctor';
                const data =await axios.get(`${Baseurl}/api/${chooseUser}/getmeeting`,{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },})
                console.log(data);
                setMeeting(data.data.meeting);
                console.log(data.data.meeting);
            }catch(err){
                console.log('error in fetchmeeting frontend');
            }
        }
    }
    useEffect(()=>{
        fetchMeeting();
    },[])
    const removebtn=async(index,doctorId,patientId)=>{
            const user = localStorage.getItem('user');
            const id = (user==='User')?doctorId:patientId;

            try{
                let chooseUser = (user === 'User') ? 'users' : 'doctor';
                const data = await axios.delete(`${Baseurl}/api/${chooseUser}/deletemeeting/${index}/${id}`,{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },})
                fetchMeeting();
            }catch(err){
                console.log(err);
            }
        
    }
  return (
    <div>
        <Navbar/>
    <div className="m-12 md:mt-24 md:mx-36">
    <div className="grid grid-cols-7 gap-8 items-center py-2 text-gray-700 text-sm font-semibold">
        <p>Sr.No</p>
        <p>Doctor</p>
        <p>User</p>
        <p>Date</p>
        <p>Time</p>
        <p>Cancel</p>
        <p>Link</p>
    </div>
    <hr className="h-1 bg-gray-200 border-0" />
    {meeting.map((e,index) => {
                return (
                    <div key={index}>
                        <div className="grid grid-cols-7 gap-8 items-center py-2 text-gray-700 text-sm font-medium">
                            <p>{`${index+1}`}</p>
                            <p>{e.doctorname}</p>
                            <p>{e.patientname}</p>
                            <p>{e.date.split('T00:00:00.000Z')}</p>
                            <p>{e.time}</p>
                            <ClearIcon className="w-4 cursor-pointer" onClick={() => { removebtn(index,e.doctorId,e.patientId) }}/>
                            <button className="bg-blue-400 text-white p-2 rounded-xl">Join</button>
                        </div>
                        <hr className="h-1 bg-gray-200 border-0" />
                    </div>
                )
        })}
   
    </div> </div>
  )
}

export default Meeting
