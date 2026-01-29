import React from 'react'
import { FaGithub } from "react-icons/fa";



export default function Header() {
  return (
    <div className='m-10 text-center '>
        <div className=' flex justify-center gap-10 '>
            <p>lucballario@gmail.com</p>
            <a className='text-2xl' href='https://github.com/LucasBallario'>
            <FaGithub className='hover:opacity/70' />
            </a>
        </div>
    </div>
  )
}
