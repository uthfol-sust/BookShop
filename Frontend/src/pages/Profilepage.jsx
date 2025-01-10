import React from 'react';
import { FaRegUser } from "react-icons/fa";

function Profilepage() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col p-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <FaRegUser/>
        <h3 className="text-lg font-semibold">Arthur Alvarez</h3>
        <p className="text-sm text-gray-500">Premium Plan</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li className="text-blue-500 font-medium cursor-pointer">Explore</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Categories</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Saved</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Book Plans</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Preference</li>
        </ul>
      </nav>

      {/* Current Book Listening */}
      <div className="mt-auto">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Current Book Listening</h4>
        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Monkey Grip</p>
            <span className="text-xs text-gray-500">Helen Warner</span>
          </div>
          <button className="text-white bg-blue-500 px-3 py-1 rounded-lg text-xs hover:bg-blue-600">
            Play
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Profilepage;
