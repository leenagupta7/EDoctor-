import React, { useState,useEffect } from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios';
import Message from '../Component/Message';

const Patient = () => {
    const Baseurl = import.meta.env.VITE_API_BASE_URL;
    const [patient,setPatient] = useState([]);
    const [selecteduser,setselecteduser] = useState('');
    const fetchUsers = async() =>{
        try{
            const data = await axios.get(`${Baseurl}/api/doctor/getuser`,{
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },});
                console.log(data);
                setPatient(data.data);
        }catch(err){
            console.log('error in front',err);
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[])
  return (
    <div>
      <Navbar/>
      <div className="pt-24 flex justify-around">
        <div>
        {patient.map((item,index)=>{
        return (
            <div onClick={()=>setselecteduser(item)} className="cursor-pointer border p-4 px-16 " key={index}>
                <span>{item}</span>
            </div>)
        })}
        </div>
        {selecteduser?(<Message Id={selecteduser}/>):(<>
        <div>to start conversation selected user</div></>)}
      </div>
    </div>
  )
}

export default Patient
