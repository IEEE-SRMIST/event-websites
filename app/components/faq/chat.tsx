import React, { useState, useEffect } from 'react';
import './anime.css';

interface ChatProps {
  key: number;
  question: string;
  answer: string;
}

const Chat: React.FC<ChatProps> = ({ key, question, answer }) => {
  const [showGenerating, setShowGenerating] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {

        const answerTimer = setTimeout(() => {
            setShowGenerating(true);
            setShowAnswer(true);
        }, 500);

        const generatingTimer = setTimeout(() => {
            setShowGenerating(false);
        }, 2000);

        return () => {
            clearTimeout(answerTimer);
            clearTimeout(generatingTimer);
        };
    }, []);

  return (
    <div key={key} className="flex flex-col space-y-2">
      
      <div className='flex flex-row space-x-2 max-w-xs self-end fade-in-right'>
        <div className="bg-[#2f2f2f] text-white text-base font-light p-3 rounded-3xl my-2">
          {question}
        </div>
        <img src='/images/hero_image.png' alt="Logo" className="w-8 h-8 rounded-full my-3" />
      </div>

      {showAnswer && (
        <div className='flex flex-row space-x-2 max-w-xs self-start fade-in-left'>
          <img src='/images/hero_image.png' alt="Logo" className="w-8 h-8 rounded-full my-3" />
          <Answer key={key} showGenerating={showGenerating} answer={answer} />
        </div>
      )}

    </div>
  );
}

interface AnswerProps {
    key: number;
    showGenerating: boolean;
    answer: string;
}
  
const Answer: React.FC<AnswerProps> = ({ key, showGenerating, answer }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [completed, setCompleted] = useState(false);
  
    useEffect(() => {
        if (!showGenerating) {
          let currentIndex = 0;
          const intervalId = setInterval(() => {

            if (currentIndex < answer.length - 1) {
              setDisplayedText((prev) => prev + answer[currentIndex]);
              currentIndex++;
            }
            
            else if (currentIndex === answer.length - 1) {
                console.log(displayedText);
              clearInterval(intervalId);
              setCompleted(true);
            }
          }, 25);
      
          return () => clearInterval(intervalId);
        } else {
          setDisplayedText('');
        }
      }, [showGenerating, answer]);
  
    return (
      <div
        key={key}
        className="answer-content bg-gray-300 text-gray-800 p-3 rounded-3xl my-4"
        style={{ maxHeight: '200px', minWidth: '200px' }}
      >
        {showGenerating 
            ? (<span>⚫</span>)
            : (<div>{displayedText}{!completed ? <span>⚫</span> : null}</div>)
        }
      </div>
    );
  };

export default Chat;
