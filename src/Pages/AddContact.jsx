import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from '../Component/Navbar';
const AddContact = () => {
    const [form, setForm] = useState({ name: '', relation: '', phonenumber: '' });
    const [contact, setContact] = useState([]);
    const Baseurl=import.meta.env.VITE_API_BASE_URL;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();

        // Validation check
        if (!form.name || !form.relation || !form.phonenumber) {
            alert('Please fill out all fields.');
            return;
        }

        const formData = {
            name: form.name,
            relation: form.relation,
            phonenumber: form.phonenumber
        };
       // console.log('formdata', formData);
       
        try {
            const response = await axios.post(`${Baseurl}/api/users/postcontact`, formData, {
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
            });
            
            console.log(response.data);
            setContact(response.data.new_user.list);
            setForm({ name: '', relation: '', phonenumber: '' });
        } catch (err) {
            console.error(err);
        }
    };

    const GetContact = async () => {
            try {
                const response = await axios.get(`${Baseurl}/api/users/getcontact`,{
                    headers: {
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json',
                    },});
                   // console.log('response',response);
                setContact(response.data.data[0].list);
            } catch (err) {
                console.log(err);
            }
    };
    const handleDelete=async(index) => {
        try{
            const data=await axios.delete(`${Baseurl}/api/users/deladdcontact/${index}`,{
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },})
           // console.log(data.data);
            setContact(data.data.list);
        }catch(err){
            console.log('error in add contact delete btn',err)
        }
    }

    useEffect(() => {
        GetContact();
    }, []); // Added userId as a dependency to re-fetch data when it changes

    return (
        <div className="bg-green-100 h-screen">
            <Navbar/>
        <div className="flex flex-col p-12 items-center space-y-12">
            <div className="bg-white p-4 flex flex-col shadow-md">
                <form onSubmit={ handleForm} className="flex flex-col space-y-4 w-96">
                    <div className="flex justify-between">
                        <span>Name</span>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border"
                            type="text"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span>Relation</span>
                        <input
                            name="relation"
                            value={form.relation}
                            onChange={handleChange}
                            className="border"
                            type="text"
                        />
                    </div>
                    <div className="flex justify-between">
                        <span>Phone Number</span>
                        <input
                            name="phonenumber"
                            value={form.phonenumber}
                            onChange={handleChange}
                            className="border"
                            type="text"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-green-blue rounded text-white w-64 p-2" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="bg-white flex-1 border border-gray-200 p-4 rounded">
                <div className="grid grid-cols-4 gap-5 p-4 font-semibold items-center">
                    <span>Name</span>
                    <span>Relation</span>
                    <span>Phone No.</span>
                    <span>Remove</span>
                </div>
                <div >
                    {contact && contact.map((item, index) => {
                        return (
                            <div className="grid grid-cols-4 gap-4 items-center" key={index}>
                                <div className=" p-4 rounded">{item.name}</div>
                                <div className=" p-4 rounded">{item.relation}</div>
                                <div className=" p-4 rounded">{item.phonenumber}</div>
                                <ClearIcon className="w-4 cursor-pointer" onClick={()=>{handleDelete(index)}}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddContact;
