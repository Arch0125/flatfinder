import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [phone, setPhone] = useState("")
  const [sessionId, setSessionId] = useState("")
  const [otp, setOtp] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    if (accessToken !== "" && accessToken !== undefined) {
      window.localStorage.setItem("accessToken", accessToken)
    }
  }, [accessToken])

  useEffect(() => {
    const storedAccessToken = window.localStorage.getItem("accessToken")

    if (storedAccessToken !== "" && storedAccessToken !== null) {
      setAccessToken(storedAccessToken)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        phone,
        setPhone,
        sessionId,
        setSessionId,
        otp,
        setOtp,
        fullName,
        setFullName,
        email,
        setEmail,
        accessToken,
        setAccessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error(
      "Component must be enclosed by AuthContextProvider to be able to use AuthContext"
    )
  }

  return auth
}

export default useAuth
