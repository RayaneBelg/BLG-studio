import React from 'react';
import { SLIDE } from '../assets/data';
import Cards from './Cards';

export default function GridProj() {
  return (
    <div className="grid md:grid-cols-3 p-4 w-[80%] md:gap-10 gap-5 overflow-y-auto border  border-slate-700 shadow-inner shadow-black  md:max-h-[70vh] h-[40vh] scrollbar  scrollbar-thumb-rose md:scrollbar-track-slate-700 bg-slate-200 ">
      {SLIDE.map((proj, index) => (
        <Cards
        
        
        infos={proj} key={index} />
      ))}
    </div>
  );
}
