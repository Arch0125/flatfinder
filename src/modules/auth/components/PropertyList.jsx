import React, { useEffect } from 'react';
import { GET_FLAT_URL } from '../../../common/constants';
import {RENT_FLAT_URL} from '../../../common/constants';
import axios from 'axios';

import { useState } from 'react';

const Propertylist=()=>{
    const[flists,setFlist]=useState([])
    const[atype,setAtype]=useState('')
    const[tenanttype,setTenanttype]=useState('');
    const[lbound,setLbound]=useState(0);
    const[ubound,setUbound]=useState(10000000000);
    const[furnish,setFurnish]=useState('');

    useEffect(()=>{
        getList();
        resetFilter();
    },[])

    const getList = async()=>{
        const res = await axios.get(GET_FLAT_URL);
        setFlist(res.data.data)
        console.log(res.data.data);
    }

    const rentFlat=async(id,name,rent,deposit,area,state,city,furnishStatus,preferredTenants,locality,apartmentType,ownerPhone,ownerEmail,imageUrl)=>{
      const res = await axios.patch(RENT_FLAT_URL,
        {
            id: id,
            name: name,
            rent: rent,
            deposit: deposit,
            area: area,
            state: state,
            city: city,
            furnishStatus: furnishStatus,
            preferredTenants: preferredTenants,
            locality: locality,
            available: false,
            apartmentType: apartmentType,
            ownerPhone: ownerPhone,
            ownerEmail: ownerEmail,
            imageUrl: imageUrl
        }
        );
        console.log(res);
    }

    const resetFilter=()=>{
      setAtype('1 BHK');
      setTenanttype('All');
      setLbound(0);
      setUbound(100000000000);
    }

    return(
        <> 
        <div class="bg-black h-[fit-content] w-full"> 
        <div className='w-full h-24 mt-10 bg-purple-600 bg-opacity-20 backdrop-blur-xl rounded drop-shadow-lg'> 
        <div className='flex text-white  flex-row w-[100vw]  h-[fit-content] p-5 justify-between' >
          <div className='flex p-4 flex-row rounded-xl  w-[fit-content] h-fit-content]  bg-purple-400 mx-5 ' >
            <button onClick={e=>setAtype('1 BHK')} className='mx-3' >1 BHK</button>
            <button onClick={e=>setAtype('2 BHK')} className='mx-3' >2 BHK</button>
            
          </div>
          <div className='flex rounded-xl  text-white flex-row w-[fit-content] h-fit-content] bg-purple-400 mx-5 ' >
            <button onClick={e=>setTenanttype('All')} className='mx-3' >All</button>
            <button onClick={e=>setTenanttype('Family')} className='mx-3' >Family</button>
            <button onClick={e=>setTenanttype('Men')} className='mx-3' >Men</button>
            <button onClick={e=>setTenanttype('Women')} className='mx-3' >Women</button>
          </div>
          <div className='flex rounded-xl  text-white flex-row w-[fit-content] h-fit-content] bg-purple-400 mx-5 ' >
            <button onClick={e=>setFurnish('Furnished')} className='mx-3' >Furnished</button>
            <button onClick={e=>setFurnish('Semi-Furnished')} className='mx-3' >Semi-Furnished</button>
            <button onClick={e=>setFurnish('Un-Furnished')} className='mx-3' >Un-Furnished</button>
          </div>
          <div className='flex rounded-xl  flex-row w-[fit-content] items-center h-fit-content] bg-purple-400 mx-5 ' >
            <label className='text-white pl-4 pr-4  '>Rent Range : </label>
            <input onChange={e=>setLbound(e.target.value)} className=' border-black-700 rounded-xl text-black border-2 w-[150px] mx-2 ' placeholder='Lowest Rent' />
            <label>to</label>
            <input onChange={e=>setUbound(e.target.value)} className=' border-2 w-[150px] text-black rounded-xl mx-2 ' placeholder='Highest Rent' />
          </div>
          <button onClick={resetFilter} className='bg-purple-400 p-2 mr-4 text-white bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-400 hover:to-pink-200 p-4 mr-4  border-1 rounded-xl ' >Reset Filter</button>
        </div>
        <div className='flex flex-row w-[100vw] p-16 justify-between flex-wrap' >
            {
                Object.keys(flists).map((flist,index)=>(
                    
                <>
                {
                  ((flists[index].furnishStatus ===furnish) && (flists[index].apartmentType === atype) && (flists[index].preferredTenants === tenanttype) && ((flists[index].rent >= lbound)&&(flists[index].rent <= ubound)))?
                  
                  <div className='bg-white shadow-1 p-5 rounded-lg rounded-tr-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8 w-64  h-32' src={flists[index].imageUrl} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-purple-400 rounded-full text-white px-3 inline-block'>
        {flists[index].preferredTenants}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
        {flists[index].state}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
        {flists[index].city}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{flists[index].locality}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            {/* <BiBath/> */}
          </div>
          <div className='text-base'> {flists[index].apartmentType}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
           {/* <BiBed/> */}
          </div>
          <div className='text-base'> {flists[index].furnishStatus } </div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            {/* <BiArea /> */}
          </div>
          <div className='text-base'> {flists[index].area} Sq Ft</div>
        </div>
       
        
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        INR  {flists[index].rent}
      </div>
      <div className='text-bold text-violet-600 mb-4 '>  {flists[index].ownerPhone} </div>

                    {
        
                      (flists[index].available === true)?<button className="text-white text-xl mr-10 p-8 text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-purple-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-900/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2" onClick={()=>rentFlat(flists[index]._id,flists[index].name,flists[index].rent,flists[index].deposit,flists[index].area,flists[index].state,flists[index].city,flists[index].furnishStatus,flists[index].preferredTenants,flists[index].locality,flists[index].apartmentType,flists[index].ownerPhone,flists[index].ownerEmail,flists[index].imageUrl)} >Rent Flat</button>:<label className="text-xl text-bold">Already Rented</label>
                    }
                    
                </div>:
                null
                }
                </>


                ))
            }
        </div>
        </div>
        <div> 
    </div>
    </div>
      </>
    )

}

export default Propertylist
{/* <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8 w-64  h-32' src={flists[index].imageUrl} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
        {flists[index].preferredTenants}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
        {flists[index].state}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{flists[index].locality}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'> {flists[index].apartmentType}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'> {flists[index].furnishStatus</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'> {flists[index].area}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        INR  {flists[index].rent}
      </div>
    </div>  */}
