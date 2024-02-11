export default function Home() {
  return (

<>
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-4xl mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
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
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Our Founding
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                IEEE SRMIST SB was established in 2015 with a vision to inspire, educate, and empower the next generation of engineers and innovators.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
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
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Our Values
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We are driven by innovation, education, community, and excellence. These values guide our actions and initiatives.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
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
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Our Journey
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
               Over the years, we've organized impactful events, workshops, and initiatives, fostering talents and technological advancement.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            <svg
              className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
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
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Membership Benefits
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Joining IEEE opens doors to a world of resources, networking, and professional development opportunities.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>
  );
}

