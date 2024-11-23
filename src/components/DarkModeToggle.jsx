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
      className=" absolute left-[50%] transform translate-x-[-50%] bottom-2 z-50"
    >
      {darkMode ? <MdSunny size={40} className='text-[#F5004F] ' /> : 
      <IoMdMoon  size={40} className='text-lightText border border-lightText shadow-lg shadow-black bg-[#F5004F] '/>
      }
    </button>
  );
}
