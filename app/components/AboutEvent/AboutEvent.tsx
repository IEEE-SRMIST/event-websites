import React, { useState, useEffect } from 'react';
import TabButton from './tab_button';
import TabImage from './tab_image';

const AboutEvent: React.FC = () => {
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
          src: '/assets/Img/about/poster_sq.png',
          alt: 'What Image',
        };
      case 'where':
        return {
          src: '/assets/Img/about/bt_block.png',
          alt: 'Where Image',
        };
      case 'when':
        return {
          src: '/assets/Img/september-17.jpg',
          alt: 'When Image',
        };
      default:
        return { src: '', alt: '' };
    }
  };

  const { src, alt } = getImageProps(activeTab);

  const getSvgColor = (tab: string) => {
    return activeTab === tab ? 'text-black' : 'text-neutral-200';
  };

  return (
    <div className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
      <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
          <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
            About E-VOLVE
          </h2>
          <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
            At E-volve, you'll delve into the theoretical foundations of Generative AI, exploring its principles, methodologies, and the latest advancements in the field. This session is perfect for those looking to deepen their understanding of AI concepts and its applications.
          </h4>
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
                  <path
                    d="M45.404 25.562a10.333 10.333 0 00-2.906-4.862 9.253 9.253 0 00-.487-8.237 10.348 10.348 0 00-6.322-4.851 10.337 10.337 0 00-5.67.088A9.218 9.218 0 0022.649 4c-4.906 0-9.021 3.416-10.116 7.991-.01.001-.02-.003-.03-.002a9.167 9.167 0 00-6.864 4.549 10.339 10.339 0 00-1.04 7.9 10.335 10.335 0 002.909 4.865 9.235 9.235 0 00.484 8.234 10.348 10.348 0 006.322 4.851c.896.24 1.807.359 2.71.359 1.004 0 1.996-.161 2.958-.45A9.192 9.192 0 0027.354 46c4.91 0 9.028-3.422 10.12-8.003a9.21 9.21 0 006.89-4.535 10.343 10.343 0 001.04-7.9zM35.17 9.543a8.353 8.353 0 015.107 3.919 7.25 7.25 0 01.569 5.967c-.1-.062-.193-.131-.294-.19l-9.17-5.294a1.007 1.007 0 00-1.01.006l-10.197 6.041-.052-4.607 8.663-5.001a8.365 8.365 0 016.384-.841zm-5.433 12.652l.062 5.504-4.736 2.805-4.8-2.699-.061-5.504 4.736-2.805 4.799 2.699zm-15.502-7.783C14.236 9.773 18.01 6 22.648 6c2.109 0 4.092.916 5.458 2.488-.105.056-.214.103-.318.163l-9.17 5.294a1.003 1.003 0 00-.5.877l.133 11.851-4.015-2.258V14.412zm-7.707 9.509a8.36 8.36 0 01.84-6.383 7.17 7.17 0 014.885-3.474c-.004.116-.018.23-.018.348V25c0 .361.195.694.51.872l10.329 5.81-3.964 2.348-8.662-5.002a8.354 8.354 0 01-3.92-5.107zm8.302 16.536a8.353 8.353 0 01-5.107-3.919 7.236 7.236 0 01-.573-5.97c.1.063.196.133.299.193l9.169 5.294a1 1 0 001.01-.006l10.198-6.041.052 4.607-8.663 5.001a8.348 8.348 0 01-6.385.841zm20.935-4.869c0 4.639-3.773 8.412-8.412 8.412a7.204 7.204 0 01-5.46-2.494c.106-.056.217-.098.32-.158l9.17-5.294c.313-.181.505-.517.5-.877l-.133-11.85 4.015 2.258v10.003zm6.866-3.126a7.218 7.218 0 01-4.884 3.483c.004-.12.018-.237.018-.357V25c0-.361-.195-.694-.51-.872l-10.33-5.81 3.965-2.348 8.662 5.002a8.357 8.357 0 013.92 5.107 8.36 8.36 0 01-.841 6.383z"
                  ></path>
                </svg>
              )}
              description="E-volve is a hands-on workshop on Generative AI, guiding participants from AI concepts to creative applications."
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
                  <path
                    d="M47.038 43.691c-1.442 0-2.442-.84-3.324-1.58-.785-.66-1.462-1.23-2.36-1.23-.896 0-1.575.57-2.358 1.23-.883.74-1.883 1.58-3.326 1.58s-2.443-.84-3.325-1.58c-.784-.66-1.462-1.228-2.36-1.228-.896 0-1.575.569-2.358 1.228-.883.742-1.883 1.582-3.325 1.582-1.444 0-2.444-.84-3.325-1.581-.785-.66-1.463-1.23-2.36-1.23-.898 0-1.576.57-2.36 1.23-.882.74-1.882 1.58-3.325 1.58-2.154-.254-3.48-1.313-4.548-2.163-.735-.586-1.315-1.049-1.873-1.049-1.056 0-1.872.873-2.659 1.718-.716.769-1.393 1.493-2.29 1.493a.75.75 0 010-1.5c.246 0 .794-.588 1.194-1.017.912-.977 2.046-2.194 3.756-2.194 1.082 0 1.92.67 2.808 1.377.966.77 2.06 1.644 3.703 1.84.808-.006 1.485-.575 2.27-1.233.881-.742 1.88-1.581 3.325-1.581 1.444 0 2.443.84 3.325 1.58.784.66 1.462 1.23 2.36 1.23.896 0 1.575-.57 2.358-1.23.883-.74 1.883-1.58 3.325-1.58 1.444 0 2.443.84 3.326 1.58.785.66 1.463 1.228 2.36 1.228.897 0 1.575-.569 2.359-1.229.882-.74 1.882-1.58 3.325-1.58 1.442 0 2.442.84 3.325 1.58.784.66 1.462 1.23 2.358 1.23a.75.75 0 110 1.5z"
                  ></path>
                  <path
                    d="M32.94 41.407a.75.75 0 01-.317-1.43c2.794-1.298 6.224-3.022 9.195-5.289L6.003 36.894l1.276 2.43a.751.751 0 01-1.324.705l-1.817-3.465a.752.752 0 01.618-1.097l39.26-2.417a.74.74 0 01.735.457.75.75 0 01-.186.847c-3.446 3.135-7.854 5.38-11.312 6.984a.736.736 0 01-.314.07zM39.614 32.311a.74.74 0 01-.273-.052l-.502-.2c-1.495-.604-2.576-1.04-4.563-.533a.747.747 0 01-.909-.527c-2.73-9.937-7.266-17.154-13.48-21.452a.75.75 0 01.646-1.334c6.7 2.05 16.48 12.054 19.801 23.134a.753.753 0 01-.21.768.76.76 0 01-.51.196zm-3.724-2.506c.954 0 1.752.204 2.517.478-2.521-7.086-7.616-13.548-12.52-17.377 3.794 4.29 6.72 9.982 8.734 17.013a7.29 7.29 0 011.268-.114z"
                  ></path>
                  <path
                    d="M7.667 33.87a.75.75 0 01-.59-1.214c8.649-10.994 2.954-23.303.106-28.085a.75.75 0 01.94-1.073c7.996 3.42 20.723 13.733 23.01 28.126a.75.75 0 01-1.02.813c-7.99-3.223-15.409-2.778-22.052 1.32a.741.741 0 01-.394.112zM9.615 5.873c2.801 5.49 6.176 15.501.431 25.113 5.974-2.76 12.471-2.904 19.369-.42-2.48-11.95-12.42-20.803-19.8-24.693z"
                  ></path>
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
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              )}
              description="9:00 AM on 17th September 2024"
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
  );
};

export default AboutEvent;