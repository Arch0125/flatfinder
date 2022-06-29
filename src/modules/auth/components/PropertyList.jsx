import React, { useEffect } from 'react';
import { GET_FLAT_URL } from '../../../common/constants';
import axios from 'axios';
import { useState } from 'react';

const Propertylist=()=>{
    const[flists,setFlist]=useState([])

    useEffect(()=>{
        getList();
    },[])

    const getList = async()=>{
        const res = await axios.get(GET_FLAT_URL);
        setFlist(res.data.data)
        console.log(flists[0].name);
    }

    return(
        <> 
        <div className='flex flex-row w-[100vw] p-16 justify-between flex-wrap' >
            {
                Object.keys(flists).map((flist,index)=>(
                    
                    
                <a class="block p-6 w-[500px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p class="font-normal text-gray-700 dark:text-gray-400">{flists[index].name}</p>
                    <button>Rent Flat</button>
                </a>


                ))
            }
        </div>
        <div> 
        {/* <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section> */}
    </div>
      </>
    )

}

export default Propertylist