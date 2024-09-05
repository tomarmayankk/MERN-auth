import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, password };

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    } else {
      setError("");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already a user?{" "}
            <Link to="/login" className="text-pink-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
      {error && (
        <div className="mt-4 p-2 text-sm text-red-800 bg-red-200 rounded">
          {error}
        </div>
      )}
    </div>
  );
};
export default Register;
