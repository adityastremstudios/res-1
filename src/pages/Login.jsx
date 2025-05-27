
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/go");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md text-center">
        <img src="/logo.png" alt="AdityaStream Studios Logo" className="mx-auto mb-4 w-24 h-24" />
        <h1 className="text-2xl font-bold mb-2">AdityaStream Studios</h1>
        <p className="mb-6 text-sm">Powering esports tournaments & production</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-green-600 py-2 rounded">Login</button>
        </form>
        <footer className="mt-6 text-xs text-gray-400">
          All rights reserved © 2025<br />
          <span className="block mt-2">All trademarks or product logos appearing on our website are the property of their respective owners. We are not affiliated with any of the supported games and services.</span>
        </footer>
      </div>
    </div>
  );
}

export default Login;
