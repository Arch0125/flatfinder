import { useState } from "react"
import apiAuth from "../apis/auth.api"
import useAuth from "../context/auth.context"
import { CheckPhoneModal } from "./CheckPhoneModal"
import { LoginModal } from "./LoginModal"
import { SignupModal } from "./SignupModal"

const LoginButton = () => {
  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)
  const [checkPhoneModal, setCheckPhoneModal] = useState(false)

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

  const loginButtonHandler = () => {
    setCheckPhoneModal(true)
  }

  const checkPhoneHandler = async () => {
    const checkPhoneResponse = await apiAuth.checkPhone({
      phone: `+91${phone}`
    })

    const sendOtpResponse = await apiAuth.sendOtp({
      phone: `+91${phone}`
    })

    if (sendOtpResponse) {
      setSessionId(sendOtpResponse.sessionId)
    }
    console.log(checkPhoneResponse)

    if (checkPhoneResponse) {
      setFullName(checkPhoneResponse.fullName)

      console.log("CheckPhoneRes", checkPhoneResponse?.userExists)

      if (checkPhoneResponse?.userExists == true) {
        console.log("User Exists")
        setCheckPhoneModal(false)
        setLoginModal(true)
      } else {
        console.log("User Does Not Exists")
        setCheckPhoneModal(false)
        setSignupModal(true)
      }
    }
  }

  const loginHandler = async () => {
    const loginResponse = await apiAuth.login({
      phone: `+91${phone}`,
      sessionId,
      otp
    })

    if (loginResponse) {
      const accessToken = loginResponse.accessToken

      console.log(accessToken)

      setAccessToken(accessToken)
      setLoginModal(false)
    }
  }

  const signupHandler = async () => {
    const signupResponse = await apiAuth.signup({
      phone: `+91${phone}`,
      sessionId,
      otp,
      fullName,
      email
    })

    if (signupResponse) {
      const accessToken = signupResponse.accessToken

      console.log(accessToken)

      setAccessToken(accessToken)
      setSignupModal(false)
    }
  }

  return (
    <>
      <LoginModal
        showModal={loginModal}
        setShowModal={setLoginModal}
        clickHandler={loginHandler}
      />
      <SignupModal
        showModal={signupModal}
        setShowModal={setSignupModal}
        clickHandler={signupHandler}
      />
      <CheckPhoneModal
        showModal={checkPhoneModal}
        setShowModal={setCheckPhoneModal}
        clickHandler={checkPhoneHandler}
      />
     
      {
        !fullName? <button
        className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-200 hover:to-pink-200 p-4 mr-4 rounded-full border-1"
        onClick={() => loginButtonHandler()}
      >
        
        Login/Signup
      </button>:<div>
        <label className="font-medium text-white " >Welcome! {fullName} <button className="border-2 p-1 border-purple-300 ml-3 rounded-xl "   onClick={() => loginButtonHandler()} >Not You ?</button></label>
        
      </div>
      }
    </>
  )
}

export default LoginButton
