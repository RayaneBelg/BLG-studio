import React from 'react';
import { SLIDE } from '../assets/data';

export default function ScrollableProjects() {
    return (
        <div className="overflow-x-auto scroll-snap-x snap-mandatory flex w-full h-[70vh]">
            {SLIDE.map((project, idx) => (
                <div
                    key={idx}
                    className="snap-center flex-shrink-0 w-[90%] md:w-[500px] h-full flex flex-col m-4 items-center justify-center bg-white border border-gray-300 p-4">
                    <h2 className="font-serif font-bold uppercase text-[5vw] lg:text-[3vw]">
                        {project.title}
                    </h2>
                    <img className="h-[25vh] object-contain" src={project.img} alt={project.title} />
                </div>
            ))}
        </div>
    );
}
