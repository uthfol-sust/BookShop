import { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {

  const [hasNotification, setHasNotification] = useState(false);

  const toggleNotification = () => {
    setHasNotification(prevState => !prevState);
  };

  return (
    <>
      <nav className="bg-gray-100 text-black fixed top-0 left-0 right-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Mobile Menu Icon (Visible on smaller screens) */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="w-30 h-10 text-lg theme-text">BookShop</span>
          </div>

          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-400 h-10 bg-gray-300 text-white rounded-md pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>

          {/* Notification, and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="theme-text">Home</a>
              <a href="#" className="theme-text">Favorite</a>
              <a href="#" className="theme-text">About</a>
            </div>

            <button onClick={toggleNotification}>
              {hasNotification ? (
                <IoIosNotificationsOutline className="w-8 h-8" />
              ) : (
                <MdOutlineNotificationAdd className="w-8 h-8" />
              )}
            </button>

            {/* Profilepage */}
            <button>
              <Link to="/Profilepage">
                <FaRegUser className="w-7 h-7 text-gray-400 rounded-full border-2 border-black p-1" />
              </Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content, add padding-top to avoid overlap */}
      <div className="pt-20">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default NavBar;
