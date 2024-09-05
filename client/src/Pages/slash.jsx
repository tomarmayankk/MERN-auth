import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-md transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Hey!
        </h1>
        <p className="text-xl text-center mt-4 text-gray-800">
          Welcome to MERN Login App 🌟
        </p>
        <p className="text-lg text-center mt-2 text-gray-600">
          Go to the login page to log in to your device.
        </p>
        <div className="mt-6 text-center">
          <button
            className="py-3 px-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500"
            onClick={() => navigate('/login')}
          >
            Go to Login Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slash;
