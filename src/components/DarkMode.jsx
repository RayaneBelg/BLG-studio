import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function DarkMode() {
  return (
    <div className="fixed    w-[10vh] left-[10%]   font-bold uppercase font-mono flex " >
        <IoMoonOutline  size={30} className='text-lightText '/>
        <LuSun size={30} className='text-[#F5004F] ' />
    
</div>
  )
}
