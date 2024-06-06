import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor = () => {
  const [formField, setFormField] = useState({
    name: '',
    specialization: '',
    college: '',
    experience: '',
    file:null,
  });
  
  const handleChange = (e) => {
    const { name, value ,files} = e.target;
    if(name==='file' && files && files.length > 0){
      setFormField({
        ...formField,
        [name]: files[0],
      });
    }else{
      setFormField({
        ...formField,
        [name]:value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', formField.name);
    formData.append('specialization', formField.specialization);
    formData.append('college', formField.college);
    formData.append('experience', formField.experience);
    formData.append('file', formField.file);
  
    try {
      const response = await axios.post('http://localhost:4000/adddoctor', formData);
      setFormField({
        name: '',
        specialization: '',
        college: '',
        experience: '',
        file: null,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="form space-y-4 shadow-md p-12" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <span>Name</span>
          <input
            className="border border-gray-300 px-2 rounded"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formField.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <span>specialization</span>
          <input
          className="border border-gray-300 px-2 rounded"
            type="text"
            name="specialization"
            placeholder="Enter Your specialization"
            value={formField.specialization}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <span>college Name</span>
          <input
          className="border border-gray-300 px-2 rounded"
            type="text"
            name="college"
            placeholder="Enter college Name"
            value={formField.college}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <span>Experience</span>
          <input
          className="border border-gray-300 px-2 rounded"
            type="text"
            name="experience"
            placeholder="Enter Your Experience"
            value={formField.experience}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
            <span>Profile Photo</span>
            <div className="formelebox">
              <input className="simpleinput" type="file" name="file" accept="image/*" onChange={handleChange}/>
              {formField.image === null ? (
                <img className="formfieldImage" src={uploadImage} alt="Upload Area" />
              ) : (
                <></>
                // <img className="formfieldImage" src={URL.createObjectURL(formField.image)} alt="Uploaded" />
              )}
            </div>
         
        </div>
        <button className="bg-green-blue text-white px-4 py-1 font-bold rounded " type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
