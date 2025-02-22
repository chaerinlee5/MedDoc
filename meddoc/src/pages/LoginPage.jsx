import React from "react";
import LoginForm from "../components/LoginForm";
import DRex from "../assets/DRex.png";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Image and Logo */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-gray-700 mb-6">
          <span className="text-green-600">med</span>Doc
        </h1>
        <img src={DRex} alt="DRex" className="w-2/3" />
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 bg-green-100 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
