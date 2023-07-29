"use client"
import React, { useRef } from 'react'
import {GiWorld} from "react-icons/gi"

function Sidebar() {
    const radioRef = useRef(null)

    type SeveralTypes ={
        city:string,
        id:number
    }

    const SeveralStates:SeveralTypes[] = [
        {city:"London", id:1},
        {city:"Amsterdam", id:2},
        {city:"New York", id:3},
        {city:"Berlin", id:4},
    ]


    const SelectRadio = (city:string)=>{
      console.log(city)
    }

  return (
    <div className='grid w-full  '>
      <div className='flex items-center gap-3 pb-8'>
        <input type='checkbox' className=''/>
        <p className=''>Full time</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold text-black/50'>LOCATION</p>
        <div className='flex items-center bg-white rounded-md px-2 py-3 shadow-lg '>
            <GiWorld className="text-black/50 text-lg" />
            <input type='text' className='w-full px-2 border-none outline-none' placeholder='City, state, zip code or country'/>
        </div>
      </div>
      <ul className='grid lg:grid-cols-1 gap-3 pt-10 px-2'>
        {SeveralStates.map((city,index) =>{
            return(
                <li key={city.id}  className='flex gap-2'>
                    <input type='radio' value={city.city} onChange={(e)=>SelectRadio(e.target.value)}  name='cityRadio' className='w-5' />
                    <p className=''>{city.city}</p>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Sidebar


