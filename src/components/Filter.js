import React from "react";
import 'tw-elements'

const Filter = () => {
    return (
        <>


<button type="button"
  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
  Filter
</button>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalFullscreenLabel">
         Filter
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">  
      <div class='flex flex-col '> 
      <h1> Apartment Type </h1>
      <div class='flex mt-20 flex-row justify-between '> 
      <button type="button"> 1BHK  </button>
      <button type="button"> 2BHK  </button>
      <button type="button"> 3BHK  </button>
      <button type="button"> 4BHK  </button>
      <button type="button"> 4+BHK  </button>
      
      </div>
      <div class='flex flex-col '> 
      <h1 class='mt-8'> Rent Range </h1>
      <div class="flex flex-row justify-between mt-16">
      <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="$0" aria-label="Price From"/>
   
  </div>
  <h1 class='mt-8'> To </h1>
  <div class="flex items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="$1000" aria-label="Price To"/>
   
  </div>
  </div>
  </div>
      </div>
      <div class='flex flex-col mt-8'> 
      <h1> Availability </h1>
      <div class="flex flex-row"> 
      <div class=''> 
      <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        Immediate
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
        Within 15 days
      </label>
     
    </div>
    </div>
    <div class='pl-28 '> 
    <div >  <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       Within 30 days
      </label>
     
    </div>
    <div >  <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
       After 30 days
      </label>
     
    </div>
    </div>
    </div>
    </div>
   
     
      </div>
      
   </div>
   <div class='flex flex-col mt-8'> 
      <h1> Preferred Tenants </h1>
      <div class="flex flex-row"> 
      <div class=''> 
      <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        Family
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
        Bachelors
      </label>
     
    </div>
    </div>
    <div class='pl-36'>  <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
        Company
      </label>
     
    </div>
    </div>
     
      </div>
      
      
      
      
      
      </div>
      

      

      
      
      
      
      
      
      
      
      
      
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>





        </>
    )
};
export default Filter