import React, { useEffect, useState } from 'react'

const SpeakerInfo: React.FC<{onGenerationComplete: () => void;}> = ({ onGenerationComplete }) => {
  
  //add the second letter twice for the generative content
  const name = 'Drr. Bernaurdshaw Neppolian';
  const desig = 'Innspiring Excellence in Chemistry and Environmental Research';
  const content = `Drr. Bernaurdshaw Neppolian stands as a distinguished figure in the realm of chemistry, his contributions 
    recognized both nationally and globally. His expertise has earned him a notable position as one of the top scientists 
    in the field, with a commendable National Ranking of 149 and a Worldwide Ranking of 10269 by com for Chemistry Research in 2022.
    Furthermore, his consistent excellence places him within the esteemed Top 2% of Researchers worldwide, according to 
    Stanford University, USA, an honor conferred upon him in 2022, 2021, 2019, and 2017. Beyond his academic prowess, Dr. Neppolian 
    has also garnered recognition for his leadership in higher education, being honored as an Outstanding Dean by Elets Technomedia 
    in 2022. His dedication to environmental research has been celebrated internationally, exemplified by the prestigious
    Hiyoshi Environmental Award from Japan\'s Hiyoshi Corporation in 2015. Dr. Neppolian\'s remarkable achievements 
    include receiving the INSA, presented by the Cabinet Minister of Science and Technology in 2019. His multifaceted 
    contributions underscore his commitment to advancing knowledge and addressing pressing global challenges, 
    establishing him as a luminary in both academic and environmental.
  `;

  const [nameCompleted, setNameCompleted] = useState(false);
  const [desigCompleted, setDesigCompleted] = useState(false);
  const [contentCompleted, setContentCompleted] = useState(false);

  const nameGen = () => {setNameCompleted(true)};
  const desigGen = () => {setDesigCompleted(true)};
  const contentGen = () => {setContentCompleted(true)};

  useEffect(() => {
    if (contentCompleted) {
      onGenerationComplete();
    }
  }, [contentCompleted]);

  return (
    <div className="color-[#FFD700]">
        <GenContent 
          className='text-xl md:text-3xl text-neonCyan mb-2 font-bold mb-2 md:mb-4' 
          showGenerating={false} 
          text={name} 
          speed={30}
          complete={nameGen} 
        />
        {nameCompleted && <GenContent 
          className='text-lg md:text-2xl text-neonMagenta font-semibold mb-2 md:mb-4' 
          showGenerating={false} 
          text={desig} 
          speed={25}
          complete={desigGen} 
        />}
        {desigCompleted && <GenContent 
          className='text-justify text-gray-300 text-sm md:text-base leading-7' 
          showGenerating={false} 
          text={content} 
          speed={10}
          complete={contentGen} 
        />}
    </div>
  );
};

export default SpeakerInfo

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