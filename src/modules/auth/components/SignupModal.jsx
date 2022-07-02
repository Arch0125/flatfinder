import Modal from "react-modal"
import OtpInput from "react-otp-input"
import useAuth from "../context/auth.context"

export const SignupModal = ({ showModal, setShowModal, clickHandler }) => {
  const {
    phone,
    setPhone,
    sessionId,
    setSessionId,
    setFullName,
    email,
    setEmail,
    fullName,
    otp,
    setOtp
  } = useAuth()

  return (
    <Modal isOpen={showModal}>
     <div className=" flex h-full  flex-col bg-black items-center  "> 
    <div class=" w-96  mt-40 h-96 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg "> 
     
      <h1 class="mb-8 ml-20 text-4xl mt-10 font-bold"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"> SignUp </span></h1>
      <input
        type="text"
        placeholder="Name"
        className="w-full max-w-xs mb-2 ml-8 input input-bordered"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-xs mb-2 ml-8 input input-bordered"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <OtpInput
        value={otp}
       
        onChange={otp => setOtp(otp)}
        numInputs={6}
        className="p-1 mr-1 ml-4 mt-4 text-black border border-solid"
        separator={<span>&nbsp;</span>}
      />
      <div>
        <button className="mb-2 ml-32 mt-6 text-xl text-white  bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-200 hover:to-pink-200 pl-6 pt-2 pb-2 pr-6  rounded-full border-1 btn btn" onClick={() => clickHandler()}>
          Sign Up
        </button>
      </div>
      </div>
      </div>
    </Modal>
  )
}
