import React from "react";

const LoginForm = () => {
  return (
    <div className="w-3/4 max-w-md bg-white p-8 rounded-lg shadow-lg">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
  Click Me
</button>

      <h2 className="text-2xl font-bold mb-4 text-center">Get Started Now</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your details to access your account
      </p>

      {/* Google Login */}
      <button className="w-full flex items-center justify-center py-2 border rounded-md shadow-sm mb-4 hover:bg-gray-100">
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Log in with Google
      </button>

      <div className="flex items-center justify-center mb-4">
        <hr className="w-1/4" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="w-1/4" />
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
