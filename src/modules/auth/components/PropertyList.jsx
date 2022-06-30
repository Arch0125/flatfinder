import React, { useEffect } from 'react';
import { GET_FLAT_URL } from '../../../common/constants';
import axios from 'axios';
import { useState } from 'react';

const Propertylist=()=>{
    const[flists,setFlist]=useState([])
    const[atype,setAtype]=useState('')
    const[tenanttype,setTenanttype]=useState('');
    const[lbound,setLbound]=useState(0);
    const[ubound,setUbound]=useState(10000000000);

    useEffect(()=>{
        getList();
        resetFilter();
    },[])

    const getList = async()=>{
        const res = await axios.get(GET_FLAT_URL);
        setFlist(res.data.data)
        console.log(res.data.data);
    }

    const resetFilter=()=>{
      setAtype('1 BHK');
      setTenanttype('All');
      setLbound(0);
      setUbound(100000000000);
    }

    return(
        <> 
        <div className='flex flex-row w-[100vw] h-[fit-content] p-5 justify-between' >
          <div className='flex flex-row w-[fit-content] h-fit-content] bg-blue-400 mx-5 ' >
            <button onClick={e=>setAtype('1 BHK')} className='mx-3' >1 BHK</button>
            <button onClick={e=>setAtype('2 BHK')} className='mx-3' >2 BHK</button>
            <button onClick={e=>setAtype('3 BHK')} className='mx-3' >3 BHK</button>
          </div>
          <div className='flex flex-row w-[fit-content] h-fit-content] bg-blue-400 mx-5 ' >
            <button onClick={e=>setTenanttype('All')} className='mx-3' >All</button>
            <button onClick={e=>setTenanttype('Bachelors')} className='mx-3' >Bachelors</button>
            <button onClick={e=>setTenanttype('Couples')} className='mx-3' >Couples</button>
            <button onClick={e=>setTenanttype('')} className='mx-3' >None</button>
          </div>
          <div className='flex flex-row w-[fit-content] items-center h-fit-content] bg-blue-400 mx-5 ' >
            <label>Rent Range : </label>
            <input onChange={e=>setLbound(e.target.value)} className=' border-black-700 border-2 w-[150px] mx-2 ' placeholder='Lowest Rent' />
            <label>to</label>
            <input onChange={e=>setUbound(e.target.value)} className=' border-2 w-[150px] mx-2 ' placeholder='Highest Rent' />
          </div>
          <button onClick={resetFilter} className='bg-blue-600 p-2 text-white rounded-xl ' >Reset Filter</button>
        </div>
        <div className='flex flex-row w-[100vw] p-16 justify-between flex-wrap' >
            {
                Object.keys(flists).map((flist,index)=>(
                    
                <>
                {
                  ((flists[index].apartmentType === atype) && (flists[index].preferredTenants === tenanttype) && ((flists[index].rent >= lbound)&&(flists[index].rent <= ubound)))?
                  <a class="block p-6 w-[500px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p class="font-normal text-gray-700 dark:text-gray-400">{flists[index].name}</p>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{flists[index].preferredTenants}</p>
                    <button>Rent Flat</button>
                </a>:
                null
                }
                </>


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