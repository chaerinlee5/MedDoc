import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import DRex from "../assets/DRex.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      setSuccessMessage("Account created successfully!");
      setEmail("");
      setPassword("");
      setUsername("");
      setIsSignUp(!isSignUp);
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-between items-start bg-white p-8 relative">
        <h1 className="text-4xl font-semibold text-[#879B87] mb-6">
          med<span className="text-black">Doc</span>
        </h1>

        <div className="w-5/6 absolute bottom-0 right-0">
          <img
            src={DRex}
            alt="medDoc Mascot"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Section (Login/Signup Form) */}
      <div className="flex-1 flex justify-center items-center p-8" style={{ backgroundColor: '#CAE2CA' }}>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">{isSignUp ? "Sign Up" : "Login"}</h2>

          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            {isSignUp && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#879B87] text-white py-2 rounded-md hover:bg-[#6b7f6b] transition"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#879B87] hover:underline"
            >
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
