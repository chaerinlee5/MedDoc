import React from "react";
import LoginForm from "../components/LoginForm";
import DRex from "../assets/DRex.png";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-between items-start bg-white p-8 relative">
            <h1 className="text-4xl font-semibold text-[#879B87] mb-6">
              med<span className="text-black">Doc</span>
            </h1>
    
            <div className="w-full max-w-2xl absolute bottom-0 left-12">
              <img
                src={DRex}
                alt="medDoc Mascot"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
    
    
          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center p-8" style={{ backgroundColor: '#CAE2CA' }}>
            <LoginForm />
          </div>
        </div>
      );
};

export default LoginPage;