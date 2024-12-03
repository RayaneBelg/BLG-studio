import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import { ABOUTDATA } from '../assets/aboutdata';

export default function Timeline() {
  return (
    <div className=' flex flex-col items-center w-full'>
        {
            ABOUTDATA.map((item , id)=>(
                <VerticalTimeline>

<VerticalTimelineElement
    className="vertical-timeline-element--work  font-teko ] "
    contentStyle={{ background: '#334155', color: '#aae114', border : "2px solid #aae114"}}
    contentArrowStyle={{ borderRight: '7px solid  #aae114' }}
    date="2011 - present"
    iconStyle={{ background: '#aae114', color: 'rose' }}
    icon={<MdOutlineWork color='#334155' />}
  >
    <h3 className="vertical-timeline-element-title text-2xl">{item.position}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
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
