import React, { useState, useEffect } from 'react';

interface GenContentProps {
  text: string;
  speed?: number; 
  showGenerating: boolean;
  complete?: () => void;
  className?: string;
}

const GenContent: React.FC<GenContentProps> = ({ text, speed = 50, showGenerating, complete, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isGenerating, setIsGenerating] = useState(showGenerating);

  useEffect(() => {
    if (showGenerating) {
      setDisplayText('');
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText((prev) => prev + (text[index] || ''));
        index += 1;
        if (index >= text.length) {
          clearInterval(timer);
          setIsGenerating(false);
          if (complete) complete();
        }
      }, speed);
      return () => clearInterval(timer);
    } else {
      setDisplayText(text); 
    }
  }, [showGenerating, text, speed, complete]);

  return (
    <div className={className}>
      {displayText}
    </div>
  );
};

export default GenContent;
