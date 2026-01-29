import React from 'react'
import { FaCode } from "react-icons/fa6";
import { SiAboutdotme } from "react-icons/si";



export default function Main() {
  return (
    <div className='ml-[15%] mt-[10%]'>
        <div className='flex gap-5'>
            <FaCode className='text-2xl' />
            <h2 className='text-4xl font-bold'>Lucas Ballario</h2>
            </div>
            <p className='text-[#D3CFCE] ml-[10%]'>Front-end developer</p>
        <div>

            <div className='mt-[10%] flex flex-col gap-0 leading-none'>
                <SiAboutdotme size={100} />
                <p>Im from Argentina, i study computer science ,i love to create products from scratch.</p>
            </div>

        </div>
    </div>
  )
}
