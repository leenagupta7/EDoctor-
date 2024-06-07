import React, { useState, useEffect, useRef, useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Swal from "sweetalert2";
import UserAvatar from "../images/user-avatar-32.png";
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import { CartContext } from '../Context';
import Edoctorlogo from '../images/Edoctorlogo.webp';
import AddDoctor from '../Pages/AddDoctor';

const StyledShoppingCartOutlinedIcon = styled(ShoppingCartOutlinedIcon)(({ theme }) => ({
  color: 'grey'
}));

function Navbar() {
  const { getTotalCartItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [userpic, setUserpic] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);
 
  const handleDropDownMenu = () => {
    setOpen(!open);
  };

  const handleUpdateProfileClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const handleFileSelected = async (event) => {
    if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
      return; // Do nothing if event or files are not available
    }
    const file = event.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name",user.name);
      formData.append("userId", user.sub);
      const response = await axios.post(
        `http://localhost:4000/updateProfile`,
        formData
      );
      setUserpic(response.data.user.picture);
      setOpen(false);
      Swal.fire({
        title: "Profile picture updated successfully!",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      let errorMessage = "An error occurred while updating your profile picture.";
      if (err.response && err.response.data && err.response.data.error) {
        errorMessage = err.response.data.error;
      }
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    }
  };

  const fetchUserProfile = async () => {
    if (!user) return;
    const userId = user?.sub;
    const name=user?.name;
    try {
      const response = await axios.get(`http://localhost:4000/getProfile/${userId}/${name}`);
      if (response.data.user[0] && response.data.user[0].picture) {
        setUserpic(response.data.user[0].picture);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-white border">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Link to='/'><img className="h-8 w-auto" src={Edoctorlogo} alt="Your Company" /></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link className="text-green-blue hover:bg-white-500 hover:text-green-800 rounded-md px-3 py-2 text-sm font-medium" to='/addcontact'>Add Contact</Link>
                <Link className="text-green-blue hover:bg-white-500 hover:text-green-800 rounded-md px-3 py-2 text-sm font-medium" to='/calendar'>Calendar</Link>
                <Link className="text-green-blue hover:bg-white-500 hover:text-green-800 rounded-md px-3 py-2 text-sm font-medium" to='/shop'>Shop</Link>
                <Link className="text-green-blue hover:bg-white-500 hover:text-green-800 rounded-md px-3 py-2 text-sm font-medium" to='/doctorlist'>Doctor</Link>
                <Link className="text-green-blue hover:bg-white-500 hover:text-green-800 rounded-md px-3 py-2 text-sm font-medium" to='/meetinglist'>Meeting</Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Link to="/cart">
              <div className="relative inline-block">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1 rounded-full bg-red-500 h-4 w-4 flex items-center justify-center">
                  <span className="text-white text-xs">{getTotalCartItem()}</span>
                </div>
                <StyledShoppingCartOutlinedIcon />
              </div>
            </Link>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div onClick={handleDropDownMenu} className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={
                      userpic
                        ? userpic
                        : user && user.picture
                          ? user.picture
                          : UserAvatar
                    } alt="" />
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInput}
                  style={{ display: "none" }}
                  onChange={handleFileSelected}
                />
                {open && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    <button onClick={handleUpdateProfileClick} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</button>
                    <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Contact us</button>
                    {isAuthenticated ? (
                      <button onClick={() => logout()} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</button>
                    ) : (
                      <button onClick={() => loginWithRedirect()} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign in</button>
                    )}
                    <Link to="/addDoctor" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-3">For Doctor</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
