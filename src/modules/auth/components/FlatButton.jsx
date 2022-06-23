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
    setPhone,
    sessionId,
    setSessionId,
    setFullName,
    otp,
    fullName,
    email,
    setAccessToken
  } = useAuth()

  const flatButtonHandler = () => {
    setAddFlatModal(true)
  }


  return (
    <>
      <AddFlatModal
        showModal={addFlatModal}
        setShowModal={setAddFlatModal}
      />
     
     <button
        className="btn btn-outline text-white rounded-xl bg-blue-600 p-2"
        onClick={() => flatButtonHandler()}
      >
        
        Login/Signup
      </button>
    </>
  )
}

export default FlatButton
