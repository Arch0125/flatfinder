import React from "react";
import "tw-elements";
import "flowbite";
import Filter from "../../../components/Filter";
import FlatButton from "./FlatButton";
import Navbar from "../../../common/components/Navbar";
import Propertylist from "./PropertyList";

const Property = () => {
  return (
    <div className="flex flex-col bg-black h-[100vh] w-[100vw] " >
      <div className="flex flex-row w-[100vw] h-[fit-content] justify-between px-[400px] mt-5" >
          <form>   
              <div class="relative">
                  <div class="flex  absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <button>   <svg class="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                  </div>
                  <input type="search" id="search" class="block p-2 pl-10 mr-10 w-[400px] text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-500 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-900/80 font-medium rounded-full border-solid border-2 border-purple-300 " placeholder="Search" required=""/>
                 
              </div>
          </form>
        <FlatButton/>
      
      </div>
      <div>
       
      </div>
      <Propertylist/>
    </div>
  );
};
export default Property;
