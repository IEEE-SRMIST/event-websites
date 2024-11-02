import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (

    <div className={`hero-section-container ${animate ? 'animate' : ''}`}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative">
        <div className="mt-2 text-center mx-auto">
          <h1 className="block font-head text-orange text-4xl sm:text-6xl md:text-8xl lg:text-12xl animate-hacktrix">
            HACKTRIX
          </h1>
        </div>
        <div className="mt-2 max-w-3xl text-center mx-auto">
          <h2 className="font-body font-bold lg:text-3xl md:text-3xl">
            Welcome to HackTrix-24, where innovation meets collaboration in the realm of technology!
          </h2>
          <div className="animated-cube"></div>
        </div>
        <div className="animated-shapes"></div>

        <div className="mt-6 gap-3 flex justify-center">
          <a
            href="/Docs/Hacktricks Submission Template (1).pptx"
            download="presentation_template.ppt"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-6 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-black text-white hover:bg-orange transform transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none">
            DOWNLOAD PPT TEMPLATE
          </a>
        </div>

      </div>
    </div >

  );
};

export default HeroSection;