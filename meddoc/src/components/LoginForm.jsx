import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full">
      <h2 className="text-3xl font-bold mb-2 text-center">Get Started Now</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your details to access your account
      </p>

      {/* Google Login */}
      <button className="w-full flex items-center justify-center py-3 px-4 border rounded-md mb-6 hover:bg-gray-50">
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Log in with Google
      </button>

      <div className="relative flex items-center justify-center mb-6">
        <div className="border-t w-full border-gray-300"></div>
        <span className="bg-white px-3 text-sm text-gray-500">or</span>
        <div className="border-t w-full border-gray-300"></div>
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#879B87] text-white py-3 rounded-md hover:bg-[#b5d8b5] transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
