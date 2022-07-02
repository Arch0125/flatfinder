import Modal from "react-modal"
import OtpInput from "react-otp-input"
import useAuth from "../context/auth.context"

export const LoginModal = ({ showModal, setShowModal, clickHandler }) => {
  const {
    phone,
    setPhone,
    sessionId,
    setSessionId,
    setAccessToken,
    fullName,
    otp,
    setOtp
  } = useAuth()

  return (
    <Modal  isOpen={showModal} onRequestClose={() => setShowModal(false)}>
    <div className=" flex h-full  flex-col bg-black items-center  "> 
    <div class=" w-96  mt-40 h-96 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg "> 
      <h1 className="mb-8 ml-20 text-4xl mt-10 font-bold  ">   <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"> Hello {fullName?.split(" ")[0]} ! </span> </h1>
      <p className="text-white text-xl ml-8 mb-10 ">Please enter OTP sent on {phone}</p>
     
      <OtpInput
        value={otp}
        onChange={otp => setOtp(otp)}
        numInputs={6}
        className="p-1 ml-4   mr-1 border  border-solid"
        separator={<span>&nbsp;</span>}
      />
      <div>
        <button className="mb-2 mt-10 ml-32 text-xl text-white  bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-200 hover:to-pink-200 pl-6 pt-2 pb-2 pr-6  rounded-full border-1 btn" onClick={() => clickHandler()}>
          Login
        </button>
      </div>
      </div>
      </div>
    </Modal>
  )
}
