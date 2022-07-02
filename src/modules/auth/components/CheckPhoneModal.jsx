import Modal from "react-modal"
import useAuth from "../context/auth.context"

export const CheckPhoneModal = ({ showModal, setShowModal, clickHandler }) => {
  const { phone, setPhone, sessionId, setSessionId, setFullName } = useAuth()

  return (
    <Modal class="" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
    <div className=" flex h-full  flex-col bg-black items-center  "> 
    <div class=" w-96  mt-40 h-96 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg "> 
      <h1 className="mb-8 ml-14 text-4xl mt-10 font-bold text-white ">Login / SignUp</h1>
      <div>
        <input
          type="text"
          placeholder="Phone"
          className="w-64 ml-14 rounded-full mt-2 max-w-xs mb-2 input input-bordered"
          onChange={e => setPhone(e.target.value)}
          maxLength={10}
        />
      </div>
      <div>
        <button className="mb-2 ml-28 mt-10  text-xl text-white  bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-200 hover:to-pink-200 pl-6 pt-2 pb-2 pr-6 mr-4 rounded-full border-1 btn" onClick={() => clickHandler()}>
          Send OTP
        </button>
      </div>
      </div>
      </div>
      
    </Modal>
  )
}
