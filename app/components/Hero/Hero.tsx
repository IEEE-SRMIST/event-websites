import React from 'react'

const Hero = () => {
  return (
    <div>

      <div className="bg-black">
        <div className="bg-black">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* Title */}
            <div className="max-w-[85rem] text-center mx-auto">
              <h1 className="block font-head text-white text-center text-6xl sm:text-8xl md:text-8xl lg:text-xl">
                HACKTRIX
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="font-body text-lg text-white">
                Preline is a large open-source project, crafted with Tailwind CSS
                framework by Hmlstream.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 font-body font-bold text-center bg-orange shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                href="#"
              >
                REGISTER
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
      {/* End Hero */}

    </div>
  )
}

export default Hero