import React from 'react'
import { SLIDE } from '../assets/data';
import NeoCards from './NeoCards';

export default function GridNeo() {
  return (
    <div className="grid dark:bg-lightText rounded-sm grid-cols-2 md:grid-cols-3 md:p-8 p-4 md:w-[85%] w-[95%] md:gap-8 gap-6 overflow-y-auto   border-slate-700  md:h-[55vh] md:max-h-[80vh] h-[45vh] scrollbar dark:border-rose scrollbar-thumb-rose md:scrollbar-track-slate-700 shadow-[inset_5px_5px_10px_#545656,_inset_-5px_-5px_10px_#ffffff]  dark:shadow-[inset_5px_5px_10px_#141a22,_inset_-5px_-5px_10px_#526888] ">
    {SLIDE.map((proj, index) => (
      <NeoCards 
      
      
      infos={proj} key={index} />
    ))}
  </div>
  )
}
