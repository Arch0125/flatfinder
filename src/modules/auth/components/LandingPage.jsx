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
<a href="/Property" ><button class="text-white p-8 text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-900/80 font-medium rounded-full text-sm px-5 py-2.5 text-center "> Properties </button></a>
<Carousel/>

</div>
 




</>
    )
}
export default Land