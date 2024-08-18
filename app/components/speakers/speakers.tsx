import React, { useState , useEffect} from 'react';
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
        <section className='max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto'>
            <div className="min-h-48 flex items-center justify-center mx-auto my-8 p-8 bg-[#131314] border-2 border-[#00F0FF] rounded-2xl relative overflow-hidden">

                {!showContent && (
                    <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} text-center text-white text-3xl tracking-wider font-bold font-roboto`}>
                        Who is the speaker?
                    </div>
                )}

                {showContent && (
                    <div className="flex flex-col-reverse lg:flex-row gap-6 items-center relative z-10">
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
        </section>
    );
};

export default Speakers;
