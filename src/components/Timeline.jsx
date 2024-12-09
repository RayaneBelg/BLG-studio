import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { ABOUTDATA } from '../assets/aboutdata';
import { color } from 'framer-motion';
import {SERVICES } from '../assets/aboutdata';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

export default function Timeline() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className=' flex flex-col items-center w-full'>
     {
        ABOUTDATA.map((item , id)=>(
            <VerticalTimeline
            lineColor={darkMode ? '#d1d8d8' : "#334155"}
            layout=''
            className=''>

<VerticalTimelineElement
className=" font-teko  text-start  "
contentStyle={{ background: darkMode ?  "#334155" : '#d1d8d8' , color: darkMode ?  '#aae114' : "#334155"  , border : darkMode ? "2px solid #d1d8d8 " : "2px solid #334155" , borderRadius : '0' }}
contentArrowStyle={{ borderRight: '10px solid  #aae114' }}

date={item.date}
iconStyle={{ background: '#aae114',  }}
icon={<MdOutlineWork color='#334155' />}
>
<h3 className=" text-xl dark:text-darkText font-bold uppercase">{item.position}</h3>
<h4 className="text-xl">{item.company}</h4>
<ul className='dark:text-darkText text-xl'>
  {item.tasks.map((task , id)=>( <li>{task}</li> ))}
</ul>
</VerticalTimelineElement>

            </VerticalTimeline>


            ))
        }
        
      
    </div>
  )
}
