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
    type
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
      ownerEmail : `${email}`
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
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => flatButtonHandler()}
      >      
        Post your Flat
      </button>
    </>
  )
}

export default FlatButton
