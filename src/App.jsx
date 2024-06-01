import React from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import AddContact from './Pages/AddContact'
import Calendar from './Pages/Calendar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Success from './Pages/Success';  
import Cancel from './Pages/Cancel';    

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addcontact" element={<AddContact/>} ></Route>
          <Route path="/calendar" element={<Calendar/>} ></Route>
          <Route path="/shop" element={<Shop/>} ></Route>
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/success" element={<Success/>} ></Route>
          <Route path="/cancel" element={<Cancel/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
