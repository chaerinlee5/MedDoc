import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // React Router v6+ for navigation
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore"; // For Firestore

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");  // Only for sign-up
  const [error, setError] = useState("");  // For error handling
  const [successMessage, setSuccessMessage] = useState("");  // Success message state
  const [isSignUp, setIsSignUp] = useState(false);  // To toggle between login and sign-up
  const navigate = useNavigate();  // React Router v6+ for navigation

  const auth = getAuth();
  const db = getFirestore();

  // Handle Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data (e.g., username) in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      setSuccessMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/");  // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");  // Clear success message if error occurs
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // After successful login, navigate to another page (e.g., Dashboard)
      navigate("/chat");  // Replace with your desired route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>

      {/* Display success message if sign-up is successful */}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {/* Display error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Conditionally render Sign-Up or Login Form */}
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        {isSignUp && (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>

      {/* Toggle between login and sign-up */}
      <div>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
