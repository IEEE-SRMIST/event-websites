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