import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import {SERVICES } from '../assets/aboutdata';
import { useContext } from 'react';

import { DarkModeContext } from './DarkModeProvider';

export default function Services() {

  
  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className=' flex flex-col items-center w-full'>
    {
        SERVICES.map((item , id)=>(
            <VerticalTimeline
            lineColor={darkMode ? '#3fcf8e' : "#334155"}
            layout=''
            className=''>

<VerticalTimelineElement
className=" font-teko text-start "
contentStyle={{ background: darkMode ?  "linear-gradient(to bottom, #0C0F1A, #0A0D17) " : '#d1d8d8' , color: darkMode ?  '#aae114' : "#334155"  , border : darkMode ? "2px solid #4C5FD5 " : "2px solid #334155" , borderRadius : '0' }}
contentArrowStyle={{ borderRight: '10px solid  #4C5FD5' }}

date={item.date}
iconStyle={{ background: '#3FCF8E',  }}
icon={React.createElement(item.icon, { color: '#4C5FD5' })}
>
<h3 className=" text-2xl dark:text-darkText font-bold">{item.name}</h3>
<h4 className="text-xl text-rose">{item.desc}</h4>
<p className='  dark:text-darkText'>
  {item.tech}
</p>
</VerticalTimelineElement>

            </VerticalTimeline>


            ))
        }
      
    </div>
  )
}
