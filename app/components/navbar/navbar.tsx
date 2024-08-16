import React from 'react';

const Navbar = () => {
    return (
      <>
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
          <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 flex md:items-center justify-between md:py-0 mx-2 lg:mx-auto">
            <div className="flex items-center justify-between">
              
              <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                <img src="/logos/logo_with_text_dark.svg" alt="Gen_AI logo" className="h-8 md:h-12" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
              <div className='ps-px md:py-4 px-4'>
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-brightYellow text-black font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href=" "
                >
                  Register Now
                </a>
              </div>
            </div>

          </nav>
        </header>
      </>

    );
};

export default Navbar;
