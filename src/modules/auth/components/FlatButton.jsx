import { useState } from "react"
import apiAuth from "../apis/auth.api"
import useAuth from "../context/auth.context"
import { CheckPhoneModal } from "./CheckPhoneModal"
import { LoginModal } from "./LoginModal"
import { SignupModal } from "./SignupModal"
import { AddFlatModal } from "./AddFlatModal"

const FlatButton = () => {
  const [addFlatModal, setAddFlatModal] = useState(false)

  const {
    phone,
    fullName,
    email,
    fname,
    deposit,
    rent,
    area,fstate,
    city,
    locality,
    furnished,
    tenants,
    available,
    type,
    image
  } = useAuth()

  const flatButtonHandler = () => {
    setAddFlatModal(true)
  }

  const addflatHandler = async () => {
    console.log(email)
    let trent = Number(rent)
    let tdeposit = Number(deposit)
    let tarea = Number(area)
    const addflatResponse = await apiAuth.addflat({
      name : `${fname}`,
      rent : trent,
      deposit : tdeposit,
      area : tarea,
      state : `${fstate}`,
      city : `${city}`,
      furnishStatus : `${furnished}`,
      preferredTenants : `${tenants}`,
      locality : `${locality}`,
      available : available,
      apartmentType : `${type}`,
      ownerPhone :`+91${phone}`,
      ownerEmail : "ruthurao@gmail.com",
      imageUrl : `${image}`
    })

    console.log(addflatResponse);
  }


  return (
    <>
      <AddFlatModal
        showModal={addFlatModal}
        setShowModal={setAddFlatModal}
        clickHandler={addflatHandler}
      />
     
     <button
        className="block  text-white font-bold  bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-900/80 font-medium rounded-full text-sm px-5 py-2.5 text-center p-4 mr-4 rounded-full border-1"
        onClick={() => flatButtonHandler()}
      >    

        Post your Flat
      </button>
    </>
  )
}

export default FlatButton
