import React from "react";
import Navbar from "../common/components/Navbar";

import Carousel from "../components/Carousel";
import Property from "../modules/auth/components/Property";
import LoginButton from "../modules/auth/components/LoginButton";

const Homepage = () => {
    return (
        <>
        <div className="bg-black h-[fit-content] w-full">
        <Navbar/>
      <Property/>
      
      </div>
     







        </>
    )
}
export default Homepage