import Image from 'next/image'
import React from 'react'
import {GiWorld} from "react-icons/gi"
import {AiOutlineClockCircle} from "react-icons/ai"
import { UseGlobal } from '../context/GlobalContext'

function Content() {

    type JobgCardstype = {

        image:string,
        name:string,
        title:string,
        period:string,
        city:string,
        publishedDate:number,
        id:number,
    }
    const JobCards: JobgCardstype[] = [{
        image:"https://www.microsoft.com/es-es/microsoft-365/blog/wp-content/uploads/sites/26/2022/06/cropped-microsoft_logo_element.png",
        name:"Microsoft",
        title:"Front-End Software Engineer",
        period:"Full time",
        city:"New York",
        publishedDate:7,
        id:1
    }]
  return (
    <ul className='grid lg:col-span-2 w-full lg:pl-10 '>
        {JobCards.map((job)=>{
            return(
                <li key={job.id} className='flex gap-5 w-full border px-2 py-3 shadow-md lg:h-24 bg-white'>
                    <div className='h-24 w-20'>
                    <Image  src={`${job.image}`} alt={job.name} priority quality={75} width={200} height={200}/>
                    </div>
                    <div className='flex flex-col gap-1 justify-between w-full'>
                        <p className='text-xs font-bold text-[#405188] '>{job.name}</p>
                        <p className='text-[#405188] '>{job.title}</p>
                        <div className='lg:flex  items-center  justify-between w-full'>
                            <div className='flex items-center w-28'>
                            <p className='border border-[#405188] px-3 text-[#405188] rounded-md'>{job.period}</p>
                            </div>
                            <div className='flex items-center gap-5 text-black/50 '>
                                <p className='flex items-center gap-2 text-black/50 '><GiWorld />{job.city}</p>
                                <p className='flex items-center  gap-2 text-black/50 '><AiOutlineClockCircle />{job.publishedDate} days ago</p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default Content








/*
import Image from 'next/image'
import React from 'react'
import {GiWorld} from "react-icons/gi"
import {AiOutlineClockCircle} from "react-icons/ai"

function Content() {
    type JobgCardstype = {
        image:string,
        name:string,
        title:string,
        period:string,
        city:string,
        publishedDate:number,
        id:number,
    }
    const JobCards: JobgCardstype[] = [{
        image:"https://www.microsoft.com/es-es/microsoft-365/blog/wp-content/uploads/sites/26/2022/06/cropped-microsoft_logo_element.png",
        name:"Microsoft",
        title:"Front-End Software Engineer",
        period:"Full time",
        city:"New York",
        publishedDate:7,
        id:1
    }]
  return (
    <ul className='grid lg:col-span-2 w-full lg:pl-10 '>
        {JobCards.map((job)=>{
            return(
                <li key={job.id} className='flex gap-5 w-full border px-2 py-3 shadow-md lg:h-24 bg-white'>
                    <div className='h-24 w-20'>
                    <Image  src={`${job.image}`} alt={job.name} priority quality={75} width={200} height={200}/>
                    </div>
                    <div className='flex flex-col justify-between w-full'>
                        <p className='text-xs font-bold text-[#405188] '>{job.name}</p>
                        <p className='text-[#405188] '>{job.title}</p>
                        <div className='flex items-center justify-between w-full'>
                            <p className='border border-[#405188] lg:px-3 lg:text-md  text-[#405188] rounded-md'>{job.period}</p>
                            <div className='flex  items-center gap-5 text-black/50 '>
                                <p className='flex items-center gap-2 text-black/50 '><GiWorld />{job.city}</p>
                                <p className='flex items-center  gap-2 text-black/50 '><AiOutlineClockCircle />{job.publishedDate} days ago</p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default Content

*/