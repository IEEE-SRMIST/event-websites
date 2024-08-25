import React, { useState, useEffect, useRef } from 'react';
import TimelineInfo from './timeline_info';
import './timelinestyles.css';

const Timeline = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showGenerating, setShowGenerating] = useState(true);
  const [titleGenOver, setTitleGenOver] = useState(false);
  const [contentGenOver, setContentGenOver] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const TimelineData = [
    {
      title: 'Welcome & Orientation',
      description: "Begin your journey with a warm welcome to IEEE SRM SB, where you will discover the perks of membership. We will provide you with essential tips on building a strong professional profile using tools like LinkedIn and GitHub, and introduce you to exciting tech domains like Web Development, Machine Learning, and more."
    },
    {
      title: 'Introduction to GenAI',
      description: 'Dive into the world of Generative AI (GenAI) as we explore its fascinating history and real-world applications. Learn the basics of Machine Learning and get hands-on experience with Python programming, giving you a strong foundation in this cutting-edge field.',
    },
    {
      title: 'Project-Based Learning',
      description: 'Put your new knowledge into practice by working on a project using prebuilt models. Then, challenge yourself with a more advanced project, such as creating an image recognition system. These activities are designed to boost your confidence and skills in applying what you have learned.',
    },
    {
      title: 'Interactive Session & Feedback',
      description: 'Wrap up the day with a fun interactive session to connect with your peers and solidify what you’ve learned. Before you go, share your thoughts and suggestions through a feedback form to help us tailor future events to your needs.',
    },
    {
      title: 'Welcome & Orientation',
      description: "Begin your journey with a warm welcome to IEEE SRM SB, where you will discover the perks of membership. We will provide you with essential tips on building a strong professional profile using tools like LinkedIn and GitHub, and introduce you to exciting tech domains like Web Development, Machine Learning, and more."
    },
    {
      title: 'Introduction to GenAI',
      description: 'Dive into the world of Generative AI (GenAI) as we explore its fascinating history and real-world applications. Learn the basics of Machine Learning and get hands-on experience with Python programming, giving you a strong foundation in this cutting-edge field.',
    },
    {
      title: 'Project-Based Learning',
      description: 'Put your new knowledge into practice by working on a project using prebuilt models. Then, challenge yourself with a more advanced project, such as creating an image recognition system. These activities are designed to boost your confidence and skills in applying what you have learned.',
    },
    {
      title: 'Interactive Session & Feedback',
      description: 'Wrap up the day with a fun interactive session to connect with your peers and solidify what you’ve learned. Before you go, share your thoughts and suggestions through a feedback form to help us tailor future events to your needs.',
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
  }, []);

  return (
    <section>
      <div className="gradient-border-container mx-auto max-w-5xl px-4 xl:px-0 py-5 lg:py-10">
        <div className="gradient-border-wrapper">
          <div ref={containerRef} className="gradient-border-content">
            {showGenerating ? (
              <div className={`fade-out ${fadeOut ? 'fade-out-active' : ''}`}>
                <p className='text-white text-2xl md:text-3xl tracking-wider font-bold text-center font-roboto'>
                  Alright Lucia, What will be the flow of events?
                </p>
              </div>
            ) : (
              <>
                <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">

                  <GenContent 
                    className="text-neonCyan font-semibold text-2xl md:text-4xl md:leading-tight" 
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
                    className="text-neonMagenta text-sm font-medium text-center mb-6" 
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
                      <h3 className="text-neonMagenta text-sm font-medium uppercase text-center">
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
