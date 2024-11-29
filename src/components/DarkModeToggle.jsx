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
      className=" absolute left-[50%] transform translate-x-[-50%] bottom-0 z-50"
    >
      {darkMode ? <MdSunny size={40} className=' text-rose   shadow-xl rounded-full shadow-lightBg bg-light ' /> : 
      <IoMdMoon  size={40} className='text-rose   shadow-xl rounded-full shadow-black bg-lightText '/>
      }
    </button>
  );
}
