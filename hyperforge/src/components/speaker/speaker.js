import React from 'react'
import speaker from '../../assets/images/speaker.jpeg'
const Speaker = () => {
  return (
    <div  id="speaker" className='pt-20 pb-20 lg:pb-auto lg:h-screen flex flex-col justify-end md:space-x-10 text-lexand md:flex-row'>
        {/* left */}
        <div className='text-[#FFFFFF] lg:text-end items-center md:text-center'>
            <h1 className='text-4xl pb-16 text-center lg:text-end'>Our Speaker</h1>
            <div className='w-full md:hidden flex justify-center pb-10'>
              <img src={speaker} className='w-2/3 rounded-full' alt="speakers" />        
            </div>
            <p className='max-w-xl px-10 lg:pr-1 pb-16 text-justify md:pl-10 lg:order-2'>Meet Baskaran Kesavan, the Founder and CEO of KriyaTec and a Director of several successful companies. With his extensive experience in business management and entrepreneurship, Baskaran brings a wealth of knowledge to the HyperForge team. He is also the founder of vLead Foundation and a Syndicate Member of TNOU, further demonstrating his dedication to supporting the growth and development of individuals and organizations alike.</p>
             <div className='flex lg:justify-end space-x-3 justify-center lg:order-3'>
                <div><a href="www.google.com"><img src="/images/links/mdi_github.svg" alt="github"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/mdi_linkedin.svg" alt="linkedin"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/ph_globe.svg" alt="global"/></a></div>
             </div>
        </div>
        {/* right */}
       <div className='w-full md:w-1/2 flex lg:justify-center md:pr-10 md:pt-auto lg:order-1'>
        <img className='hidden w-72 h-72 mt-8 md:block rounded-full' src={speaker} alt="speakers" />        
       </div>
    </div>
  )
}

export default Speaker
