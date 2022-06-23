import Modal from "react-modal"
import useAuth from "../context/auth.context"

export const AddFlatModal = ({ showModal, setShowModal, clickHandler }) => {
  const { setFname,setRent,setDeposit,setArea,setFstate,setCity,setFurnished,setLocality,setTenants,setType} = useAuth()

  return (
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <h1 className="mb-2">Rent your Flat</h1>
      <div>
        <input
          type="text"
          placeholder="Flat Name"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rent"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setRent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Deposit"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setDeposit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Area"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setArea(e.target.value)}
        />
      <input
          type="text"
          placeholder="State"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setFstate(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Locality"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setLocality(e.target.value)}
        />
        <input
          type="text"
          placeholder="Furnished"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setFurnished(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tenants Allowed"
          className="w-full max-w-xs mb-2 input input-bordered"
          onChange={e => setTenants(e.target.value)}
        />
      </div>
      <div>
        <button className="mb-2 btn" onClick={() => clickHandler()}>
          Post your Flat
        </button>
      </div>
    </Modal>
  )
}
