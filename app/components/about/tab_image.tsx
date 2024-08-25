import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TabImageProps {
  src: string;
  alt: string;
}

const TabImage: React.FC<TabImageProps> = ({ src, alt }) => {
  const [displayedSrc, setDisplayedSrc] = useState(src);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (src !== displayedSrc) {
      // Start the fade-out and pop-out animation
      setIsFading(true);

      // Wait for the fade-out animation to complete before switching the image
      const timeoutId = setTimeout(() => {
        setDisplayedSrc(src);
        // Start the fade-in and pop-in animation
        setIsFading(false);
      }, 500); // This duration should match the CSS transition

      return () => clearTimeout(timeoutId);
    }
  }, [src, displayedSrc]);

  return (
    <div className="relative overflow-hidden max-h-[500px]">
      {/* Image container with fade and pop animation */}
      <div
        className={`transition-all duration-500 ease-in-out transform ${
          isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        <Image
          src={displayedSrc}
          alt={alt}
          width={500}
          height={500}
          className="w-full h-auto object-cover shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
        />
      </div>
    </div>
  );
};

export default TabImage;