import LoginButton from '@modules/auth/components/LoginButton'
import useAuth from '@modules/auth/context/auth.context'

const Navbar = () => {
  const { accessToken } = useAuth()

  return (
    <div className='navbar w-[100vw]  px-2 sm:px-4  rounded shadow-xl bg-white '>
      <div className='navbar-start'>
        <a className='text-xl normal-case text-red-400 btn btn-ghost'>findtheflat</a>
      </div>
      {accessToken !== '' && accessToken !== undefined ? (
        <button className='btn  btn-outline'>Logged In</button>
      ) : (
        <div className='navbar-end  '>
          <LoginButton />
        </div>
      )}
    </div>
  )
}

export default Navbar
