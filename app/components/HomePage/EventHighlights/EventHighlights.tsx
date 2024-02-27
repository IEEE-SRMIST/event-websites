import React from 'react'

const EventHighlights = () => {
    const handleDownloadPDF = () => {
        const pdfUrl = '/Docs/HackTrix - Problem Statements.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'HackTrix_Problem_Statements.pdf';
        link.click();
    };

    return (
        <div>

            {/* video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto lg:max-w-[85rem] lg:mt-8 lg:rounded-6xl mx-auto"
            >
                <source src="/video/Event_Highlights.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Masonry cards */}
            <div className="max-w-[85rem] mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white text-black">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="font-body font-bold text-2xl hover:text-orange md:text-3xl">
                        HackTrix Tracks
                    </h2>
                    <h3 className="mt-1 md:mt-4 text-normal font-body font-medium text-gray-500">
                        Explore Diverse Horizons in Our Specialized Tracks
                    </h3>
                </div>
                <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-12 gap-6">
                        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/img/tracks/Web-App.jpg" alt="Image Description" />
                                </div>
                            </a>
                        </div>
                        <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
                            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/img/tracks/ai-ml.jpg" alt="Image Description" />
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/img/tracks/blockchain.jpg" alt="Image Description" />
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/img/tracks/electronics.jpg" alt="Image Description" />
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/img/tracks/open-ended.jpg" alt="Image Description" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
                <button
                    onClick={handleDownloadPDF}
                    className="py-4 px-6 mt-4 mb-8 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-black text-white hover:bg-orange transform transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none">
                    Download Problem Statements
                </button>
            </div>

        </div>
    )
}

export default EventHighlights