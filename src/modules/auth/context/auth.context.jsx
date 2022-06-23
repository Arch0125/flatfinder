import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [phone, setPhone] = useState("")
  const [sessionId, setSessionId] = useState("")
  const [otp, setOtp] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const[fname,setFname]=useState("");
  const[rent,setRent]=useState(0);
  const[deposit,setDeposit]=useState(0);
  const[area,setArea]=useState(0);
  const[fstate,setFstate]=useState("");
  const[city,setCity]=useState("");
  const[furnished,setFurnished]=useState("");
  const[tenants,setTenants]=useState("");
  const[locality,setLocality]=useState("");
  const[available,setAvailable]=useState(true);
  const[type,setType]=useState("");

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
        setAccessToken,
        fname,
        setFname,
        rent,
        setRent,
        deposit,
        setDeposit,
        area,setArea,
        fstate,setFstate,
        city,setCity,
        furnished,setFurnished,
        tenants,setTenants,
        locality,setLocality,
        available,setAvailable,
        type,setType
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
