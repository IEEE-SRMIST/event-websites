import React from 'react'

const Registration = () => {
    return (
        <div>

            <section>
                <div className="max-w-[85rem] lg:mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black font-body text-white">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-left">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Register Now!
                                </h2>
                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                                    tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
                                    et fermentum, augue. Aliquet amet volutpat quisque ut interdum
                                    tincidunt duis.
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