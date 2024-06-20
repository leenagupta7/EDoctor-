import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import AddContact from './Pages/AddContact'
import Calendar from './Pages/Calendar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import AddDoctor from './Pages/AddDoctor'
import DoctorList from './Pages/DoctorList'
import Doctor from './Pages/Doctor'
import Meeting from './Pages/Meeting'
import Login from './Pages/Login'
import Patient from './Pages/Patient'


const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addcontact" element={<AddContact />} ></Route>
          <Route path="/calendar" element={<Calendar />} ></Route>
          <Route path="/shop" element={<Shop />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/addDoctor" element={<AddDoctor />} ></Route>
          <Route path="/doctorlist" element={<DoctorList />} ></Route>
          <Route path="/patientlist" element={<Patient/>} />
          <Route path="/success" element={<Success />} ></Route>
          <Route path="/cancel" element={<Cancel />} ></Route>
          <Route path="/doctor/:id" element={<Doctor />}></Route>
          <Route path="/meetinglist" element={<Meeting />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
