import React from 'react'
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className='bg-green-500 text-gray-300'>
      <nav className='flex justify-between p-4 mx-8 '>
        <h1 className=' text-2xl font-bold'>SHOPPER'S STOPPE</h1>
        <ul className='flex  gap-8 text-xl cursor-pointer '>
            <li className='hover:text-white'>Home</li>
            <li className='hover:text-white' >Category</li>
            <li className='hover:text-white' >Contact Us</li>
        </ul>

      <div className='flex items-center gap-5 cursor-pointer'>
      
      <CgProfile size={40} />
      </div>
      </nav>
    </div>
  )
}

export default Header