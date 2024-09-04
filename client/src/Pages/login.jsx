import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = { email, password };

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    
    if (!response.ok) {
      setError(result.error);
    } else {
      setError("");
      setEmail("");
      setPassword("");
      localStorage.setItem('token', result.token); // Save the token to local storage (optional)
      navigate("/home");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white rounded-sm p-6 shadow large w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className='mb-4'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='block text-gray-700 mb-2'>
              Email
            </label>
            <input
              type="email"
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your Email'
              required
            />
            <label htmlFor="password" className='block text-gray-700 mb-2 mt-4'>
              Password
            </label>
            <input
              type="password"
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your Password'
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-4"
            >
              Login
            </button>
          </form>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Not a user?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
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

export default Login;
