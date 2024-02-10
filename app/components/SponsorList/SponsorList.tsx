import React from 'react';

const SponsorList: React.FC = () => {
    return (
        <section className="bg-black text-white py-16" style={{ width: '100%' }}>
            {/* Desktop layout (above 640px) */}
            <div className="hidden sm:block">
                <div className="w-[1440px] h-[84px] px-[84px] flex-col justify-start items-center gap-4 inline-flex">
                    <div className="self-stretch text-center text-zinc-300 text-2xl font-semibold font-['Montserrat']">OUR SPONSORS</div>
                    <div className="self-stretch text-center text-white text-[32px] font-bold font-['Montserrat']">Elevate Your Brand with Us: Sponsorship Opportunities</div>
                </div>
                <div className="w-[1440px] h-64 py-16 justify-center items-center gap-8 inline-flex">
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-64 h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                </div>
            </div>

            {/* Mobile layout (below 640px) */}
            <div className="sm:hidden">
                <div className="w-full px-4">
                    <div className="text-center text-blue-500 text-l font-bold font-montserrat">OUR SPONSORS</div>
                    <div className="text-center text-gray-300 text-2xl font-bold font-montserrat mb-4">Elevate Your Brand with Us: Sponsorship Opportunities</div>
                </div>
                <div className="max-w-screen-md mx-auto px-4 py-4 grid grid-cols-2 gap-4">
                    {/* Mobile cards layout here */}
                    <div className="w-full h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-full h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-full h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                    <div className="w-full h-32 p-3 rounded-md border border-white border-opacity-10 justify-between items-end flex">
                        <div className="grow shrink basis-0 text-white text-xs font-semibold font-['Montserrat'] underline">Visit Site</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorList;