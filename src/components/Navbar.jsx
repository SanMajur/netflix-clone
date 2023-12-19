import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
        <div className="">
            <button className="text-white pr-4 capitalize">sign in</button>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer capitalize">sign up</button>
        </div>
    </div>
  )
}

export default Navbar