import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('what');

  // Function to handle automatic tab switching
  useEffect(() => {
    const tabs = ['what', 'where', 'when'];
    let currentIndex = 0;

    const switchTab = () => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    };

    // Change tab every 3 seconds
    const intervalId = setInterval(switchTab, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const renderContent = (tab: string) => {
    switch (tab) {
      case 'what':
        return {
          image: '/images/about_poster.jpeg',
          description: 'E-VOLVE is a hands-on workshop on Generative AI, guiding participants from AI concepts to creative applications.'
        };
      case 'where':
        return {
          image: '/images/hero_image.png',
          description: 'Ramachandran Hall (Biotech), SRM Institute of Science and Technology'
        };
      case 'when':
        return {
          image: '/images/hero_image2.png',
          description: '17th September \n 9:00 AM'
        };
      default:
        return { image: '', description: '' };
    }
  };

  const { image, description } = renderContent(activeTab);

  // Function to determine SVG color based on active tab
  const getSvgColor = (tab: string) => {
    return activeTab === tab ? 'text-black' : 'text-gray-800 dark:text-neutral-200';
  };

  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                About E-VOLVE
              </h2>
              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${activeTab === 'what' ? 'bg-white shadow-md text-black' : 'bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-gray-800 dark:text-neutral-200'}`}
                  onClick={() => setActiveTab('what')}
                  id="tabs-with-card-item-1"
                  aria-selected={activeTab === 'what'}
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <img src="/images/svg2.svg" alt="Icon 1" className={`shrink-0 mt-2 size-6 md:size-7 ${getSvgColor('what')}`} />
                    <span className="grow">
                      <span className="block text-lg font-semibold">
                        What
                      </span>
                      {activeTab === 'what' && (
                        <span className="block mt-1">
                          {description}
                        </span>
                      )}
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${activeTab === 'where' ? 'bg-white shadow-md text-black' : 'bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-gray-800 dark:text-neutral-200'}`}
                  onClick={() => setActiveTab('where')}
                  id="tabs-with-card-item-2"
                  aria-selected={activeTab === 'where'}
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <img src="/images/svg1.svg" alt="Icon 2" className={`shrink-0 mt-2 size-6 md:size-7 ${getSvgColor('where')}`} />
                    <span className="grow">
                      <span className="block text-lg font-semibold">
                        Where
                      </span>
                      {activeTab === 'where' && (
                        <span className="block mt-1">
                          {description}
                        </span>
                      )}
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${activeTab === 'when' ? 'bg-white shadow-md text-black' : 'bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 text-gray-800 dark:text-neutral-200'}`}
                  onClick={() => setActiveTab('when')}
                  id="tabs-with-card-item-3"
                  aria-selected={activeTab === 'when'}
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className={`shrink-0 mt-2 size-6 md:size-7 ${getSvgColor('when')}`}
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
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold">
                        When
                      </span>
                      {activeTab === 'when' && (
                        <span className="block mt-1">
                          {description}
                        </span>
                      )}
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div>
                  <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src={image} alt={`${activeTab} Image`} />
                </div>
                {/* End Tab Content */}
                {/* SVG Element */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800" />
          </div>
          {/* End Background Color */}
        </div>
      </div>
      {/* End Features */}
    </>
  );
};

export default About;
