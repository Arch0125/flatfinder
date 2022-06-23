import {
  ADD_FLAT_URL,
    CHECK_PHONE_URL,
    LOGIN_URL,
    REGISTER_URL,
    SEND_OTP_URL
  } from "../../../common/constants"
  import { handleError, handleResponse } from "../../../common/utils/responseHandler"
  import axios from "axios"
  
  class ApiAuth {
    constructor() {
      this.checkPhone = async checkPhoneModal => {
        try {
          const res = await axios.get(
            `${CHECK_PHONE_URL}/${checkPhoneModal.phone}`
          )
  
          return handleResponse(res)
        } catch (error) {
          return handleError(error)
        }
      }
  
      this.login = async loginModel => {
        try {
          const res = await axios.post(LOGIN_URL, loginModel)
  
          return handleResponse(res)
        } catch (error) {
          return handleError(error)
        }
      }
  
      this.signup = async signupModel => {
        try {
          const res = await axios.post(REGISTER_URL, signupModel)
  
          return handleResponse(res)
        } catch (error) {
          return handleError(error)
        }
      }
  
      this.sendOtp = async sendOtpModel => {
        try {
          const res = await axios.post(SEND_OTP_URL, sendOtpModel)
  
          return handleResponse(res)
        } catch (error) {
          return handleError(error)
        }
      }

      this.addflat = async addFlatModal =>{
        try{
          const res = await axios.post(ADD_FLAT_URL,addFlatModal)
          return handleResponse(res);
        }
        catch(error){
          return handleError(error)
        }
      } 
    }
  }
  
  const apiAuth = new ApiAuth()
  
  export default apiAuth
  