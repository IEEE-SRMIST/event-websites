import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TimelineInfoProps {
  index: number;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const TimelineInfo: React.FC<TimelineInfoProps> = ({ index, title, description, isOpen, onToggle }) => {
  return (
    <div className="flex gap-x-5 ms-1 relative">
      <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
        <div className="relative z-10 size-8 flex justify-center items-center">
          <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-neonCyan font-semibold text-xs uppercase rounded-full">
            {index + 1}
          </span>
        </div>
      </div>

      <div className="grow pt-0.5 pb-8 sm:pb-12">
        <div className="flex items-center cursor-pointer" onClick={onToggle}>
          <h4 className={`text-sm lg:text-base ${isOpen ? 'text-neonCyan' : 'text-neutral-200'} flex-grow`}>{title}</h4>
          <span className="text-neonCyan ml-2 transition-transform duration-300">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-200 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className='text-sm lg:text-base text-neutral-400 mt-2'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineInfo;
