import React from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Blogs from './Pages/Blogs'
import AddContact from './Pages/AddContact'
import Calendar from './Pages/Calendar'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blogs/>} ></Route>
          <Route path="/addcontact" element={<AddContact/>} ></Route>
          <Route path="/calendar" element={<Calendar/>} ></Route>
          <Route path="/shop" element={<Shop/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
