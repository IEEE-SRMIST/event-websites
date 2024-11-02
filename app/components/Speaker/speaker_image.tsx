import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import './speakerstyles.css'

const SpeakerImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {!imageLoaded ? (
                <div className="w-72 h-72 shimmer flex items-center justify-center rounded-lg grow">
                    <div className="shimmer-text">Generating Image</div>
                </div>
            ) : (
                <Image
                    src="/assets/Img/Yohan.png"
                    alt="Dr. Bernaurdshaw Neppolian"
                    width={500}
                    height={500}
                    className='profile-image w-full h-auto rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                />
            )
            }
        </div>
    )
}

export default SpeakerImage