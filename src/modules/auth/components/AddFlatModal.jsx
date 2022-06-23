import Modal from "react-modal"
import useAuth from "../context/auth.context"

export const AddFlatModal = ({ showModal, setShowModal, clickHandler }) => {
  const { setFname,setRent,setDeposit,setArea,setFstate,setCity,setFurnished,setLocality,setTenants,setType,setAvailable} = useAuth()

  return (
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <h1 className="mb-2">Rent your Flat</h1>
      <div>
        <input
          type="text"
          placeholder="Phone"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setFname(e.target.value)}
          maxLength={10}
        />
      </div>
      <div>
        <button className="mb-2 btn" onClick={() => clickHandler()}>
          Send OTP
        </button>
      </div>
    </Modal>
  )
}
