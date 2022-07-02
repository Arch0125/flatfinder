import React from "react";
import Navbar from "../../../common/components/Navbar";
import Carousel from "../../../components/Carousel";
const Land=()=>{
    return(
<>

<Navbar/>
<div className="w-full h-screen bg-black  ">
<div> 
<h1 className=" font-bold text-6xl pt-12 pb-20   "> 
<span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300">
               Explore Flats with Us
            </span>
</h1>
</div>
<Carousel/>

</div>
 




</>
    )
}
export default Land