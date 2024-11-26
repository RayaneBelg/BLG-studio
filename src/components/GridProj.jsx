import React from 'react';
import { SLIDE } from '../assets/data';
import Cards from './Cards';

export default function GridProj() {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-2 md:p-4 p-2 md:w-[80%] w-[95%] md:gap-4 gap-2 overflow-y-auto border  border-slate-700 shadow-inner shadow-black  md:max-h-[80vh] h-[45vh] scrollbar  scrollbar-thumb-rose md:scrollbar-track-slate-700 bg-slate-200 ">
      {SLIDE.map((proj, index) => (
        <Cards 
        
        
        infos={proj} key={index} />
      ))}
    </div>
  );
}
