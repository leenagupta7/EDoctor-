import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddContact = () => {
    const [form, setForm] = useState({ name: '', relation: '', phonenumber: '' });
    const [contact, setContact] = useState([]);
    const { loginWithRedirect,isAuthenticated,user } = useAuth0();
    const userId = user?.sub;

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
            setContact(response.data.new_user.list);
            setForm({ name: '', relation: '', phonenumber: '' });
        } catch (err) {
            console.log(err);
        }
    };
    const GetContact = async () => { // Make GetContact an asynchronous function
        if (userId) {
            try {
                const response = await axios.get(`http://localhost:4000/getcontact/${userId}`); // Await the response
                //console.log('hey', response.data.data[0].list);
                setContact(response.data.data[0].list);
            } catch (err) {
                console.log(err);
            }
        }
    };
    useEffect(() => {
        GetContact();
    }, [])

    return (
        <div className="flex" >
            <div className="  flex-1 border border-gray-200 flex items-center">
            <form onSubmit={isAuthenticated?handleForm:()=>loginWithRedirect()} className=" flex flex-col space-y-4 ">
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
            
            <div className="flex-1 border border-gray-200 p-4 rounded space-y-2">
               <div className="flex justify-between p-4"> <span>Name</span>
                <span>Relation</span>
                <span>Phone No.</span></div>
                {contact && contact.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-between space-x-4 border border-gray-500 p-4 rounded">
                            <span>{item.name}</span>
                            <span>{item.relation}</span>
                            <span>{item.phonenumber}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AddContact;
