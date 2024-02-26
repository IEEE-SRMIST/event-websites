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

            <div
                data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
                className="relative"
            >
                <div className="hs-carousel relative overflow-hidden max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto lg:min-h-[720px] bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                    <img src="/img/tracks/Web-App.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                <img src="/img/tracks/ai-ml.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                <img src="/img/tracks/blockchain.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                <img src="/img/tracks/electronics.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                <img src="/img/tracks/open-ended.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-black hover:text-orange"
                >
                    <span className="text-2xl" aria-hidden="true">
                        <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    type="button"
                    className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-black hover:text-orange"
                >
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg
                            className="size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </span>
                </button>
                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
                </div>
            </div>
            {/* End Slider */}

            {/* Download Button */}
            <div className="text-center mt-4">
                <button
                    onClick={handleDownloadPDF}
                    className="py-4 px-6 mt-8 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-black text-white hover:bg-orange transform transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none">
                    Download Problem Statements
                </button>
            </div>

        </div>
    )
}

export default EventHighlights