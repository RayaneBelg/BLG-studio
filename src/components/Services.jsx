import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
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
            lineColor={darkMode ? '#d1d8d8' : "#334155"}
            layout=''
            className=''>

<VerticalTimelineElement
className=" font-teko "
contentStyle={{ background: darkMode ?  "#334155" : '#d1d8d8' , color: darkMode ?  '#aae114' : "#334155"  , border : darkMode ? "2px solid #d1d8d8 " : "2px solid #334155" , borderRadius : '0' }}
contentArrowStyle={{ borderRight: '10px solid  #aae114' }}

date={item.date}
iconStyle={{ background: '#aae114',  }}
icon={<MdOutlineWork color='#334155' />}
>
<h3 className=" text-2xl dark:text-darkText font-bold">{item.name}</h3>
<h4 className="text-xl">{item.desc}</h4>
<p className='dark:text-darkText'>
  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
</p>
</VerticalTimelineElement>

            </VerticalTimeline>


            ))
        }
      
    </div>
  )
}
