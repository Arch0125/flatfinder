



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousal = () => {
    const item = [
        {id: 1, title: 'item #1',image:"https://i.ibb.co/q5pbzSB/1.png"},
        {id: 2, title: 'item #2',image:"https://i.ibb.co/GJX0xr6/2.png"},
        {id: 3, title: 'item #3',image:"https://i.ibb.co/FJS77s1/3.png"},
        {id: 4, title: 'item #4',image:"https://i.ibb.co/4Pth1qh/4.png"},
        {id: 5, title: 'item #5',image:"https://i.ibb.co/sJ3H2cK/5.png"}
      ]
   {
        return (
            <Carousel>
                {item.map(item => <div key={item.id} > <img src={item.image}  /> </div>)}
            </Carousel>
        );
    }
};

export default Carousal