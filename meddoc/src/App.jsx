import React from "react";
import LoginForm from "./components/LoginForm";
import Drex from "./assets/DRex.png";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section (Image) */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <h1 className="text-5xl font-bold text-green-600 mb-6">
          med<span className="text-black">Doc</span>
        </h1>
        <div className="w-full max-w-md flex justify-center">
          <img
            src={Drex}
            alt="medDoc Mascot"
            className="w-auto h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex-1 flex justify-center items-center bg-green-100 p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;