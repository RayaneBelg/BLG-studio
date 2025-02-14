import React from 'react';
import { SLIDE } from '../assets/data';
import Cards from './Cards';

export default function GridProj() {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 md:p-6 p-4 md:w-[65%] w-[95%] md:gap-4 gap-2 overflow-y-auto border  border-slate-700 shadow-inner dark:shadow-violet md:h-[55vh] md:max-h-[80vh] h-[45vh] scrollbar  scrollbar-thumb-rose md:scrollbar-track-slate-700  ">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(76,95,213,0.3)_0%,rgba(12,16,36,0)_70%)] pointer-events-none z-0" />
      {SLIDE.map((proj, index) => (
        <Cards 
        
        
        infos={proj} key={index} />
      ))}
    </div>
  );
}
