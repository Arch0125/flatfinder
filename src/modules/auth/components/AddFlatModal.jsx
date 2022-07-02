import Modal from "react-modal"
import useAuth from "../context/auth.context"

export const AddFlatModal = ({ showModal, setShowModal, clickHandler }) => {
  const { setFname,setRent,setDeposit,setArea,setFstate,setCity,setFurnished,setLocality,setTenants,setType} = useAuth()

  return (
    <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <div className=" flex h-full  flex-col bg-black items-center  "> 
    <div class=" w-96 mt-10  h-full mb-20 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg "> 
      <h1 className="mb-6 mt-4 ml-16 text-4xl  font-bold "> <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"> Rent your Flat </span> </h1>
      <div>
        <input
          type="text"
          placeholder="Flat Name"
          className="w-full ml-8 rounded-md max-w-xs mb-2 input input-bordered"
          onChange={e => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rent"
          className="w-full rounded-md ml-8  max-w-xs mb-2 input input-bordered"
          onChange={e => setRent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Deposit"
          className="w-full ml-8 rounded-md   max-w-xs mb-2 input input-bordered"
          onChange={e => setDeposit(e.target.value)}
        />
        <input
          type="text"
          placeholder="Area"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setArea(e.target.value)}
        />
      <input
          type="text"
          placeholder="State"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setFstate(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Locality"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setLocality(e.target.value)}
        />
        <input
          type="text"
          placeholder="Furnished"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setFurnished(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          className="w-full  rounded-md  ml-8 max-w-xs mb-2 input input-bordered"
          onChange={e => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tenants Allowed"
          className="w-full ml-8  rounded-md  max-w-xs mb-2 input input-bordered"
          onChange={e => setTenants(e.target.value)}
        />
      </div>
      <div>
        <button className="mb-4 ml-28 mt-8 text-xl text-white  bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-200 hover:to-pink-200 pl-6 pt-2 pb-2 pr-6  rounded-full border-1 btn" onClick={() => clickHandler()}>
          Post your Flat
        </button>
      </div>
      </div>
      </div>
    </Modal>
  )
}
