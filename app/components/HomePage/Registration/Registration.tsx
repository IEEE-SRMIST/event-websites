import React from 'react'

const Registration = () => {
    return (
        <div>

            <section>
                <div className="max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black font-body text-white">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-left">
                                <h2 className="text-2xl font-bold text-orange md:text-3xl">
                                    Register Now for the Ultimate Coding Experience!
                                </h2>
                                <p className="text-white/90 sm:mt-4">
                                    Gear up for an exhilarating journey into the world of coding and innovation at HackTrix! Join forces with like-minded enthusiasts, collaborate seamlessly, and unleash your coding creativity. This hackathon promises to be a platform where groundbreaking projects come to life.
                                </p>
                                <p className="text-white/90 sm:mt-4">
                                    Whether you're a seasoned developer or just starting your coding journey, HackTrix is the place to be. Don't miss out on the chance to connect with fellow tech enthusiasts, learn, and create something extraordinary together!
                                </p>
                                <div className="mt-6 gap-3 flex">
                                    <button type="button" className="py-2 px-6 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-orange text-white hover:bg-white hover:text-orange disabled:opacity-50 disabled:pointer-events-none">
                                        REGISTER
                                    </button>
                                </div>

                            </div>
                            <div className="mt-8 animated-cube"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <img
                                alt=""
                                src="/img/reference_img/IMG_2010.png"
                                className="h-40 w-full rounded-4xl object-cover sm:h-56 md:h-full"
                            />
                            <img
                                alt=""
                                src="/img/reference_img/IMG_1997.png"
                                className="h-40 w-full rounded-4xl object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Registration