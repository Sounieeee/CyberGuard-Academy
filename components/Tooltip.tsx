import React from 'react';
import { glossaryData } from '../data/glossaryData';

interface TooltipProps {
  term: string;
}

const Tooltip: React.FC<TooltipProps> = ({ term }) => {
  const entry = glossaryData.find(item => item.term.toLowerCase() === term.toLowerCase());
  const definition = entry ? entry.definition : 'Definition not found.';

  return (
    <span className="relative group cursor-pointer">
      <span className="text-accent font-semibold border-b-2 border-accent border-dotted">
        {term}
      </span>
      <span 
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-primary text-text-primary text-sm rounded-lg shadow-2xl 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 border border-border-color"
      >
        {definition}
        <svg className="absolute text-primary h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};

export default Tooltip;