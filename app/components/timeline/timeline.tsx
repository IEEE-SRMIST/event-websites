import React, { useState, useEffect, useRef } from 'react';
import TimelineInfo from './timeline_info';
import './timelinestyles.css';
import { useInView } from 'react-intersection-observer';

const Timeline: React.FC<{onGenerationComplete: () => void;}> = ({ onGenerationComplete }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showGenerating, setShowGenerating] = useState(true);
  const [titleGenOver, setTitleGenOver] = useState(false);
  const [contentGenOver, setContentGenOver] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const TimelineData = [
    {
      title: 'Inaugural Programs (9:00 am - 10:00 am)',
      description: "Kick off the day with a welcome speech followed by an introduction to our keynote speaker. This session will set the tone for the event and give you a glimpse of what to expect."
    },
    {
      title: 'Speaker Session 1 (10:00 am - 11:30 am)',
      description: 'Engage in the first speaker session where industry experts will share insights and knowledge on cutting-edge topics in technology. This session will be an eye-opener for all tech enthusiasts.'
    },
    {
      title: 'Break (11:30 am - 11:45 am)',
      description: 'Take a short break to recharge with refreshments before diving into the next session.'
    },
    {
      title: 'Speaker Session 2 (11:45 am - 1:00 pm)',
      description: 'Join the second speaker session, which will delve deeper into specific tech domains and provide practical advice for budding professionals.'
    },
    {
      title: 'Lunch Break & Ice Breaker (1:00 pm - 2:00 pm)',
      description: "Enjoy a lunch break to relax and network with fellow attendees. The break will conclude with an ice-breaker activity to foster connections."
    },
    {
      title: 'Speaker Session 3 (2:00 pm - 3:30 pm)',
      description: 'Participate in the final speaker session of the day, featuring an in-depth discussion on advanced topics and future trends in technology.'
    },
    {
      title: 'Orientation & IEEE Promotion (3:30 pm - 5:00 pm)',
      description: 'Wrap up the event with an orientation session covering LinkedIn, GitHub, and resume building. Learn about IEEE promotion and recruitment opportunities to boost your professional journey.'
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 1000);

      const showContentTimer = setTimeout(() => {
        setShowGenerating(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearTimeout(showContentTimer);
      };
    }
  }, [inView]);

  useEffect(() => {
    if (showFlow) {
      onGenerationComplete();
    }
  }, [showFlow]);

  return (
    <section ref={inViewRef}>
      <div className="gradient-border-container max-w-screen-2xl mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
        <div className="gradient-border-wrapper">
          <div ref={containerRef} className="gradient-border-content">
            {showGenerating ? (
              <div className={`fade-out ${fadeOut ? 'fade-out-active' : ''}`}>
                <p className='text-white text-2xl md:text-3xl tracking-wider font-bold text-center font-roboto'>
                  What will be the Flow of events?
                </p>
              </div>
            ) : (
              <>
                <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">

                  <GenContent 
                    className="text-white font-semibold text-2xl md:text-4xl md:leading-tight" 
                    showGenerating={showGenerating} 
                    text="Tiimeline" 
                    speed={20}
                    complete={() => {setTitleGenOver(true)}}
                  />

                  {titleGenOver && (<GenContent 
                    className="mt-2 text-neutral-400" 
                    showGenerating={showGenerating} 
                    text="Exxperience a day of focused learning and hands-on tech exploration. Each session is crafted to empower you with practical skills and insights. Let's dive in!" 
                    speed={20}
                    complete={() => {setContentGenOver(true)}}
                  />)}
                </div>

                {contentGenOver && !showFlow &&(
                  <GenContent 
                    className="text-neonCyan text-sm font-medium text-center mb-6" 
                    showGenerating={showGenerating} 
                    text="Gaatherting the flow of events..." 
                    speed={25}
                    complete={() => {
                      const timer = setTimeout(() => {
                        setShowFlow(true);

                      }, 2000);
                      return () => clearTimeout(timer);
                    }}
                  />
                )}

                {showFlow && (<div className="flex justify-center">
                  <div className="w-full max-w-3xl">
                    <div className="mb-6">
                      <h3 className="text-neonCyan text-sm font-medium uppercase text-center">
                        Flow of Events
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {TimelineData.map((timeline, index) => (
                        <TimelineInfo
                          key={index}
                          index={index}
                          title={timeline.title}
                          description={timeline.description}
                          isOpen={openIndex === index}
                          onToggle={() => handleToggle(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>)}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;


interface GenContentProps {
  className: string;
  showGenerating: boolean;
  text: string;
  speed: number;
  complete: VoidFunction;
}

const GenContent: React.FC<GenContentProps> = ({ className, showGenerating, text, speed, complete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
      if (!showGenerating) {
        let currentIndex = 0;
        const intervalId = setInterval(() => {


          if (currentIndex < text.length - 1) {
            setDisplayedText((prev) => prev + text[currentIndex]);
            currentIndex++;
          }
          
          else if (currentIndex === text.length - 1) {
            clearInterval(intervalId);
            setCompleted(true);
            complete();
          }
        }, speed);
    
        return () => clearInterval(intervalId);
      } else {
        setDisplayedText('');
      }
    }, [showGenerating, text]);

  return (
    <div
      className={className}
    >
      {showGenerating 
          ? (<span>⚪</span>)
          : (<div>{displayedText}{!completed ? <span>⚪</span> : null}</div>)
      }
    </div>
  );
};
