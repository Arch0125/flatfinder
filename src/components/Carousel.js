import React from "react";
import 'tw-elements';
const Carousel = () => {
    return (
      <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
      <div class="carousel-inner relative w-full  h-96  mt-20 overflow-hidden ">
        <div class="carousel-item active relative  w-full float-left ">
          <img
            src="  https://i.ibb.co/gFtt8WJ/flatpic9.jpg"
            class="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item relative w-full  float-left ">
          <img
            src=" https://i.ibb.co/nLLvM0d/flatpic2.jpg"
            class="block w-full"
            alt="Camera"
          />
       
        </div>
        <div class="carousel-item relative  float-left w-full">
          <img
    
            src="  https://i.ibb.co/fv8TYM1/flatpic8.jpg"
            class="block w-full "
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-item relative  float-left w-full">
          <img
    
           src="     https://i.ibb.co/5Gxx8Yz/flatpic12.jpg    "
            class="block w-full "
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    )
}
export default Carousel