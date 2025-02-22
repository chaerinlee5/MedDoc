import React from "react";
import LoginForm from "../components/LoginForm";
import DRex from "../assets/DRex.png";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Image and Logo */}
      <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <h1 className="text-4xl font-semibold mb-6">
          <span className="text-green-600">med</span>Doc
        </h1>
        <div className="w-[400px]">
          <img 
            src={DRex} 
            alt="DRex" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-green-100">
        <div className="w-[400px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;