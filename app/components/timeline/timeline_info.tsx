import React from 'react'

const SpeakerInfo = ({ index, title, description }: {index:number; title:String; description:String;}) => {
    return (
      <div className="flex gap-x-5 ms-1">
        <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
          <div className="relative z-10 size-8 flex justify-center items-center">
            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-neonCyan font-semibold text-xs uppercase rounded-full">
              {index + 1}
            </span>
          </div>
        </div>
  
        <div className="grow pt-0.5 pb-8 sm:pb-12">
          <p className="text-sm lg:text-base text-neutral-400">
            <span className="text-white">{title}:</span> {description}
          </p>
        </div>
      </div>
    );
  };

export default SpeakerInfo