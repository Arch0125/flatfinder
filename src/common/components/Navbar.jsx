import React from 'react'
import LoginButton from '../../modules/auth/components/LoginButton'

const Navbar = () => {
  return (
    <div className=' flex items-center flex-row justify-between w-[100vw] h-fit-content] shadow-xl bg-white p-4 '>
      <label className='text-2xl font-semibold text-black '>
        flatfinder
      </label>
      <LoginButton />
    </div>
  )
}

export default Navbar
