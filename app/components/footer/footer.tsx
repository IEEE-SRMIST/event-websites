import React from 'react'
import Socials from './socials'

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        <a
          className="flex-none text-xl font-semibold text-black focus:outline-none dark:text-white"
          href="https://www.ieeesrmist.com/"
          aria-label="Brand"
        >
          <img src="/logos/logo_with_text_dark.svg" alt="Gen_AI logo" className="h-16" />
        </a>

        <div className="mt-3 flex flex-col items-center justify-center pt-5 pb-8">
          <p className="text-white font-body">
              We're part of the{' '}
              <a
                className="font-semibold text-neonCyan hover:text-neonMagenta"
                href="https://www.ieee.org/"
              >
                IEEE
              </a>{' '}
              family.
          </p>
          <p className="text-white font-semibold">© 2024 IEEE SRM. All rights reserved.</p>
        </div>

        <Socials />
        
      </div>
      
    </footer>
  )
}

export default Footer