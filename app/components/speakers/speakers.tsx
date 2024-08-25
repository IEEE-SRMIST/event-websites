import React, { useState, useEffect } from 'react';
import SpeakerInfo from './speaker_info';
import SpeakerImage from './speaker_image';
import { useInView } from 'react-intersection-observer';
import './styles.css';

const Speakers: React.FC<{onGenerationComplete: () => void;}> = ({ onGenerationComplete }) => {

    const [showContent, setShowContent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.7 });
    const [genComplete, setGenComplete] = useState(false);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                setFadeOut(true);
            }, 1000);

            if (fadeOut) {
                const timer2 = setTimeout(() => {
                    setShowContent(true);
                }, 2000);
                return () => clearTimeout(timer2);
            }

            return () => clearTimeout(timer);
        }
    }, [inView, fadeOut]);

    
    useEffect(() => {
        if (genComplete) {
            onGenerationComplete();
        }
    }, [genComplete]);

    return (
        <section ref={ref} className='speakers-section'>
            <div className="speakers-container mx-4">
                <div className="speakers-wrapper">
                    {!showContent && (
                        <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} text-white text-2xl md:text-3xl tracking-wider font-bold text-center font-roboto`}>
                            So who's gonna be speaking at the event?
                        </div>
                    )}

                    {showContent && (
                        <div className="flex flex-col-reverse lg:flex-row gap-6 items-center relative z-10">
                            <div className="flex-1 lg:mr-6">
                                <SpeakerInfo onGenerationComplete={() => {setGenComplete(true)}}/>
                            </div>
                            <div className="flex-shrink-0 lg:w-1/3">
                                <SpeakerImage />
                            </div>
                        </div>
                    )}

                    {showContent && (
                        <div className="shapes">
                            <div className="shape shape1"></div>
                            <div className="shape shape2"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
