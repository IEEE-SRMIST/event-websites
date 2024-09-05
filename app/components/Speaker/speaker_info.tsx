import React, { useEffect, useState } from 'react'

const SpeakerInfo: React.FC<{ onGenerationComplete: () => void; }> = ({ onGenerationComplete }) => {

  //add the second letter twice for the generative content
  const name = 'Yoohan Vergis Vinu';
  const desig = 'Appplied AI Engineer';
  const content = `Yoohan Vergis Vinu is a final-year Computer Science student at SRM Institute of Science and Technology, where his focus is on applied machine learning and artificial intelligence. He has gained practical experience through a research internship at Samsung R&D, where he worked on an advanced computer vision project. Currently, Yohan is an AI engineer at Moative, where he focuses on developing applied AI and LLM-based Software-as-a-Service (SaaS) products. He is also an undergraduate researcher at SRM currently working on vision-language models in human biometrics. As a public speaker and AI enthusiast, Yohan is passionate about sharing his knowledge of generative AI and its applications with aspiring students.
  `;

  const [nameCompleted, setNameCompleted] = useState(false);
  const [desigCompleted, setDesigCompleted] = useState(false);
  const [contentCompleted, setContentCompleted] = useState(false);

  const nameGen = () => { setNameCompleted(true) };
  const desigGen = () => { setDesigCompleted(true) };
  const contentGen = () => { setContentCompleted(true) };

  useEffect(() => {
    if (contentCompleted) {
      onGenerationComplete();
    }
  }, [contentCompleted]);

  return (
    <div>
      <GenContent
        className='mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl'
        showGenerating={false}
        text={name}
        speed={30}
        complete={nameGen}
      />
      {nameCompleted && <GenContent
        className='mb-4 md:mb-6 text-xl text-neonCyan font-sans font-bold'
        showGenerating={false}
        text={desig}
        speed={25}
        complete={desigGen}
      />}
      {desigCompleted && <GenContent
        className='text-justify mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg'
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