import React, { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "", 
    phone: "", // Changed "number" to "phone"
  });

  const [errors, setErrors] = useState({});



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data={
        
    }
    
  };

  return (
    <div className="shadow-md bg-white max-w-sm mx-auto mt-20 p-6 rounded-lg">
      <h2 className="text-2xl theme-text font-bold text-center mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            id="name"
            type="text"
            name="name"
          
            className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
           
            className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
          <input
            id="password"
            type="password"
            name="password"
           
          
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label htmlFor="confirm" className="block text-sm font-semibold mb-2">Confirm Password</label>
          <input
            id="confirm"
            type="password"
            name="confirm"
            value={formData.confirm}
          
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.confirm && <span className="text-red-500 text-xs">{errors.confirm}</span>}
        </div>

        {/* Phone number Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone number</label>
          <input
            id="phone"
            type="number"
            name="phone"

            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <a
          href="/"
          className="text-blue-500 hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
