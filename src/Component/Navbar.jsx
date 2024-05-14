import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Swal from "sweetalert2";
import UserAvatar from "../images/user-avatar-32.png";
import {Link} from 'react-router-dom'

function Navbar() {
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

  const handleUpdateProfileClick = () => {
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
    try {
      const response = await axios.get(`http://localhost:4000/${userId}`);
      if (response.data.user[0] && response.data.user[0].picture) {
        setUserpic(response.data.user[0].picture);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Your mobile menu button code */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to='addcontact'>Add Contact</Link>
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to='/calendar'>Calendar</Link>
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" to='/blog'>Blog</Link>
              </div>
            </div>
          </div>
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
                  <a onClick={handleUpdateProfileClick} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Contact us</a>
                  {isAuthenticated ? (
                    <a onClick={() => logout()} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                  ) : (
                    <a onClick={() => loginWithRedirect()} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign in</a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
