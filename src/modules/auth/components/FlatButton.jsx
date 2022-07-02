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
      ownerEmail : `${email}`,
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
        className="block text-white font-bold  bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-400 hover:to-pink-200 p-4 mr-4 rounded-full border-1"
        onClick={() => flatButtonHandler()}
      >    

        Post your Flat
      </button>
    </>
  )
}

export default FlatButton
