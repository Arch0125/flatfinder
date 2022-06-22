import React from 'react';
import LoginButton from '../../modules/auth/components/LoginButton';

const Navbar =()=>{
    return(
        <div className=' flex items-center flex-row justify-between w-[100vw] h-fit-content] bg-white p-4 '  >
            <label className='font-semibold text-2xl text-blue-500 ' >flatfinder</label>
            <LoginButton/>
        </div>
    )
}

export default Navbar;