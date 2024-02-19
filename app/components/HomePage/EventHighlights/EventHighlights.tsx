import React from 'react'

const EventHighlights = () => {
    return (
        <div>

            <section>
                <div className="max-w-[85rem] mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-orange text-white">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-4xl sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt="hacktrix-image"
                                src="/img/reference_img/IMG_1986.png"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Event Highlights</h2>
                            <p className="mt-4 text-white">
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

        </div>
    )
}

export default EventHighlights