import React from 'react'

const EventHighlights = () => {
    return (
        <div>

            <section>
                <div className="max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-500 text-white">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-4xl sm:h-80 lg:order-last lg:h-full group">
                            <img
                                alt="hacktrix-image"
                                src="/img/reference_img/IMG_1986.png"
                                className="absolute inset-0 h-full w-full object-cover rounded-4xl transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 rounded-4xl border-4 border-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="lg:py-24">
                            <h2 className="font-body font-bold text-2xl md:text-3xl">Event Highlights</h2>
                            <p className="mt-2 md:mt-4 text-md font-body font-medium text-white">
                                Hactrix-24 is a celebration of teamwork, creativity, and technological prowess. It's a platform for students to come together, showcase their talents, and contribute to building a vibrant tech community. Our goal is to create an environment where innovation thrives, and everyone can stay on the pulse of the latest tech trends.
                            </p>
                            <div className="mt-6 gap-3 flex">
                                <button type="button" className="py-2 px-6 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-black text-white hover:bg-white hover:text-orange disabled:opacity-50 disabled:pointer-events-none">
                                    REGISTER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider */}
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
                                    First slide
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                    Second slide
                                </span>
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-orange p-6">
                                <span className="self-center text-4xl transition duration-700">
                                    Third slide
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
                </div>
            </div>
            {/* End Slider */}

        </div>
    )
}

export default EventHighlights