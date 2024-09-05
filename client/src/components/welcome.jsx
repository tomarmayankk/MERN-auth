import React from 'react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-lg max-w-md transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Hey!
        </h1>
        <p className="text-xl text-center mt-4 text-gray-800">
          You have successfully logged in! 🎉
        </p>
        <div className="mt-6 text-center">
          <button className="py-3 px-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-500">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
