import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';
import { IoMoonOutline } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" absolute left-[50%] transform translate-x-[-50%] bottom-1 z-50"
    >
      {darkMode ? <MdSunny size={40} className=' text-rose    rounded-full  shadow-[5px_5px_10px_#141a22,_-5px_-5px_10px_#526888] ' /> : 
      <IoMdMoon  size={40} className='text-rose   shadow-xl rounded-full shadow-black bg-lightText '/>
      }
    </button>
  );
}
