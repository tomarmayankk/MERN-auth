import React from 'react'

const Header = () => {
  return (
    <>
    <header className="flex justify-between h-12 items-center p-4 bg-gray-50 shadow-md">
    <div className="text-2xl font-bold text-blue-500">LOGO</div>
    <div>
      <img
      src='https://discuss.ens.domains/uploads/db9688/original/2X/5/54f5ecfea7e9abb70f0ff5ac56c8bd1a160f000d.jpeg'
        alt="avatar"
        className="w-10 h-10 rounded-full bg-gray-600"
      />
    </div>
  </header>
    </>
  )
}
export default Header