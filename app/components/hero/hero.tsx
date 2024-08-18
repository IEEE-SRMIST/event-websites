import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-8">
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full z-0">
          <div className="absolute bg-neonCyan opacity-20 rounded-full blur-3xl w-72 h-72 top-10 -left-10"></div>
          <div className="absolute bg-neonBlue opacity-20 rounded-full blur-3xl w-96 h-96 top-1/3 left-1/4"></div>
          <div className="absolute bg-neonCyan opacity-20 rounded-full blur-3xl w-80 h-80 bottom-20 right-10"></div>
        </div>
      </div>  */}
      
      <div className="relative  z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 md:pr-8">
          <Image 
            src="/images/hero_2345.jpg" 
            alt="E-volve Hero Image" 
            
            width={500}
            height={500}
            className="mx-auto mb-8 md:mb-0 fade-border"
          />
          </div>
      </div>
    </section>
  );
};

export default Hero;
