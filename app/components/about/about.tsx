import React, { useState, useEffect } from 'react';
import TabButton from './tab_button';
import TabImage from './tab_image';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('what');
  const [scale, setScale] = useState<number>(1);
  const [isManualSwitch, setIsManualSwitch] = useState<boolean>(false);

  useEffect(() => {
    setScale(1.05);
    const timer = setTimeout(() => setScale(1), 3000);

    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const tabs: string[] = ['what', 'where', 'when'];
    let currentIndex = tabs.indexOf(activeTab);

    const switchTab = () => {
      if (!isManualSwitch) {
        currentIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[currentIndex]);
      }
      setIsManualSwitch(false);
    };

    const intervalId = setInterval(switchTab, 3000);

    return () => clearInterval(intervalId);
  }, [activeTab, isManualSwitch]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsManualSwitch(true);
  };

  const getImageProps = (tab: string) => {
    switch (tab) {
      case 'what':
        return {
          src: '/images/about_poster2.jpg',
          alt: 'What Image',
        };
      case 'where':
        return {
          src: '/images/hero_image.png',
          alt: 'Where Image',
        };
      case 'when':
        return {
          src: '/images/hero_image2.png',
          alt: 'When Image',
        };
      default:
        return { src: '', alt: '' };
    }
  };

  const { src, alt } = getImageProps(activeTab);

  const getSvgColor = (tab: string) => {
    return activeTab === tab ? 'text-black' : 'text-gray-800 dark:text-neutral-200';
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                About E-VOLVE
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <TabButton
                  label="What"
                  icon={() => (
                    <svg
                      className={`shrink-0 mt-2 size-6 md:size-7 ${getSvgColor('what')}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="none"
                      viewBox="0 0 50 50"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* SVG Path here */}
                    </svg>
                  )}
                  description="E-VOLVE is a hands-on workshop on Generative AI, guiding participants from AI concepts to creative applications."
                  isActive={activeTab === 'what'}
                  onClick={() => handleTabClick('what')}
                  scale={scale}
                />
                <TabButton
                  label="Where"
                  icon={() => (
                    <svg
                      className={`shrink-0 mt-2 size-6 md:size-7 ${getSvgColor('where')}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* SVG Path here */}
                    </svg>
                  )}
                  description="Ramachandran Hall (Biotech), SRM Institute of Science and Technology"
                  isActive={activeTab === 'where'}
                  onClick={() => handleTabClick('where')}
                  scale={scale}
                />
                <TabButton
                  label="When"
                  icon={() => (
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
                      {/* SVG Path here */}
                    </svg>
                  )}
                  description="17th September \n 9:00 AM"
                  isActive={activeTab === 'when'}
                  onClick={() => handleTabClick('when')}
                  scale={scale}
                />
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <TabImage src={src} alt={alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;