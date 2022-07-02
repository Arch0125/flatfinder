import React from 'react'
import LoginButton from '../../modules/auth/components/LoginButton'

const Navbar = () => {
  return (
    <div className=' flex items-center flex-row justify-between w-[100vw] h-fit-content] shadow-xl bg-black p-4 '>
     
      <label className='text-2xl font-semibold text-white '>
      <img className='w-10 remove.bg' src="https://i.ibb.co/qdmXjWF/uruthu.png" />
        flatfinder
      </label>
     
      <LoginButton />
    </div>
  )
}

export default Navbar
