import React from 'react';

const SponsorList: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop layout (above 640px) */}
            <div className="hidden sm:flex flex-col items-center justify-center">
                <div className="text-center text-zinc-300 text-2xl font-semibold font-montserrat">OUR SPONSORS</div>
                <div className="text-center text-white text-2xl font-bold font-montserrat mb-4">Elevate Your Brand with Us: Sponsorship Opportunities</div>
                <div className="flex justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                            <div className="text-white text-xs font-semibold font-montserrat underline">Visit Site</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile layout (below 640px) */}
            <div className="sm:hidden">
                <div className="text-center text-zinc-300 text-l font-bold font-montserrat">OUR SPONSORS</div>
                <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Elevate Your Brand with Us: Sponsorship Opportunities</div>
                <div className="max-w-screen-md mx-auto grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="w-full h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                            <div className="text-white text-xs font-semibold font-montserrat underline">Visit Site</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorList;
