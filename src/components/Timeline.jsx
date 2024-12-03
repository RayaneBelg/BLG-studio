import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { ABOUTDATA } from '../assets/aboutdata';
import { color } from 'framer-motion';

export default function Timeline() {
  return (
    <div className=' flex flex-col items-center w-full'>
        {
            ABOUTDATA.map((item , id)=>(
                <VerticalTimeline
                lineColor={'#aae114'}
                layout=''
                className=''>

<VerticalTimelineElement
    className=" font-teko  ] "
    contentStyle={{ background: '#334155', color: '#aae114', border : "2px solid #aae114" , borderRadius : '0' }}
    contentArrowStyle={{ borderRight: '10px solid  #aae114' }}
    
    date="2011 - present"
    iconStyle={{ background: '#aae114',  }}
    icon={<MdOutlineWork color='#334155' />}
  >
    <h3 className=" text-xl font-bold">{item.position}</h3>
    <h4 className="">{item.company}</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
                </VerticalTimeline>


            ))
        }
        
      
    </div>
  )
}
