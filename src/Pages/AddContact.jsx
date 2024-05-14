import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const AddContact = () => {
    const [form, setForm] = useState({ name: '', relation: '', phonenumber: '' });
    const  {user} = useAuth0();
    const userId = user ? user.sub : undefined;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const formData = {
            userId: user.sub,
            name: form.name,
            relation: form.relation,
            phonenumber: form.phonenumber
        };
        console.log('formdata', formData);
        try {
            const response = await axios.post(`http://localhost:4000/postcontact`, formData);
            console.log(response.data);
            setForm({ name: '', relation: '', phonenumber: '' });
        } catch (err) {
            console.log(err);
        }
    };
     
    //  const GetContact = () => {
    //     try{
    //         const response = axios.get(`http://localhost:4000/${getcontact}`,{
    //             userId:user.sub
    //     })
    //     }catch(err){
    //         console.log(err);
    //     }
    //  }
    //  useEffect(()=>{
    //     GetContact();
    //  },[handleForm])

    return (
        <div >
            <form onSubmit={handleForm} className="flex-col space-y-4">
                <div className="space-x-4">
                    <span>Name</span>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border"
                        type="text"
                    />
                </div>
                <div className="space-x-4">
                    <span>Relation</span>
                    <input
                        name="relation"
                        value={form.relation}
                        onChange={handleChange}
                        className="border"
                        type="text"
                    />
                </div>
                <div className="space-x-4">
                    <span>Phone Number</span>
                    <input
                        name="phonenumber"
                        value={form.phonenumber}
                        onChange={handleChange}
                        className="border"
                        type="text"
                    />
                </div>
                <button className="btn px-2 bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white" type="submit">
                    submit
                </button>
            </form>
           
        </div>
    );
};

export default AddContact;
