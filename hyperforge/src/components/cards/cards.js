import React from "react";
import img from "../../assets/images/image 4.svg";
const Cards = () => {
  return (
  <div  id="AboutEvent" className="bg-black">
    <div className="text-Roboto text-2xl mt-32 lg:mt-auto lg:text-4xl mb-8 text-white text-center pt-80 md:pt-20">
        <h3>Whats in it for you?</h3>
    </div>
    <div className="lg:-mt-32">
    <section className="bg-black min-h-screen flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-16 text-white flex-grow">
      <div className="w-[200px] h-[320px] lg:w-[220px] lg:h-[300px]  bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full"/>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white border-2 px-2 pb-2">
              <p className="text-sm lg:text-base">

              Join HyperForge, the premier blockchain event for students, and discover how blockchain technology is changing the world. Whether you're a computer science or business major, our event offers valuable insights into this exciting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[320px] lg:w-[220px] lg:h-[300px]  bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white border-2 px-2 pb-2">
              <p className="text-sm lg:text-base">
              At HyperForge, you'll hear from experts in the field and learn about cutting-edge research and applications. Network with like-minded individuals and gain a competitive edge in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[320px] lg:w-[220px] lg:h-[300px] bg-transparent cursor-pointer group perspective lg:py-0 py-8">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src={img} className="w-full h-full" />
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-white border-2 px-2 pb-2">
              <p className="text-sm lg:text-base">
              Don't miss out on this opportunity to stay ahead of the curve and unlock the limitless potential of blockchain. Register now for HyperForge and take the first step towards a successful career in this exciting field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};
export default Cards;