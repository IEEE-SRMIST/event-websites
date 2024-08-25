import React, { useState, useEffect } from 'react';
import SpeakerInfo from './speaker_info';
import SpeakerImage from './speaker_image';
import './styles.css';

const Speakers = () => {
    const [showContent, setShowContent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
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
    }, [fadeOut]);

    return (
        <section className="max-w-5xl px-4 xl:px-0 py-5 lg:py-10 mx-auto">
            <div className="relative min-h-48 flex items-center justify-center mx-auto my-8 gradient-border rounded-2xl overflow-hidden">
                <div className="relative p-8 bg-background-gradient rounded-2xl w-full h-full flex items-center justify-center">
                    {!showContent && (
                        <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} text-center text-white text-3xl tracking-wider font-bold font-roboto`}>
                            So who's gonna be speaking at the event?
                        </div>
                    )}

                    {showContent && (
                        <div className="flex flex-col-reverse lg:flex-row gap-6 items-center z-10">
                            <div className="flex-1 lg:mr-6">
                                <SpeakerInfo />
                            </div>
                            <div className="flex-shrink-0 lg:w-1/3">
                                <SpeakerImage />
                            </div>
                        </div>
                    )}

                    {/* Shapes section (can be shown alongside or after content, if needed) */}
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
