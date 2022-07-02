import React from 'react'
import LoginButton from '../../modules/auth/components/LoginButton'

const Navbar = () => {
  return (
    <div className=' flex items-center flex-row justify-between w-[100vw] h-fit-content] shadow-xl bg-black p-4 '>
      <div class="flex flex-row "> 
      <img className='w-10 remove.bg' src="https://svgshare.com/i/imi.svg" />
      
     <h1 className='text-4xl ml-10 font-bold text-white'> 
     <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-200">
     flatfinder
     </span>
     </h1>
     </div>
       
     
     
      <LoginButton />
    </div>
  )
}

export default Navbar
