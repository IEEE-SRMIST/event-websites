import React from 'react';
import Image from 'next/image';

interface TabImageProps {
  src: string;
  alt: string;
}

const TabImage: React.FC<TabImageProps> = ({ src, alt }) => {
  return (
    <div
      className="overflow-hidden max-h-[500px]"
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-auto object-cover shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
      />
    </div>
  );
};

export default TabImage;