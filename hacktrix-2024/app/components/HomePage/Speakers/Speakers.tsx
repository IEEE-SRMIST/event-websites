import React from 'react';

const Speakers = () => {
    return (
        <div>

            <div className="max-w-[85rem] mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black font-body text-white">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8 mb-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-2xl text-orange md:text-3xl">
                                    Dr. Bernaurdshaw Neppolian
                                </h2>
                                <h2 className="font-bold text-xl md:text-xl">
                                    Inspiring Excellence in Chemistry and Environmental Research
                                </h2>
                                <p className="text-sm font-body text-gray-300">
                                    Dr. Bernaurdshaw Neppolian stands as a distinguished figure in the realm of chemistry, his contributions recognized both nationally and globally. His expertise has earned him a notable position as one of the top scientists in the field, with a commendable National Ranking of 149 and a Worldwide Ranking of 10269 by com for Chemistry Research in 2022.
                                </p>
                                <p className="text-sm font-body text-gray-300">
                                    Furthermore, his consistent excellence places him within the esteemed Top 2% of Researchers worldwide, according to Stanford University, USA, an honor conferred upon him in 2022, 2021, 2019, and 2017.
                                    Beyond his academic prowess, Dr. Neppolian has also garnered recognition for his leadership in higher education, being honored as an Outstanding Dean by Elets Technomedia in 2022.
                                </p>
                                <p className="text-sm font-body text-gray-300">
                                    His dedication to environmental research has been celebrated internationally, exemplified by the prestigious Hiyoshi Environmental Award from Japan's Hiyoshi Corporation in 2015. Dr. Neppolian's remarkable achievements include receiving the INSA, presented by the Cabinet Minister of Science and Technology in 2019.
                                    His multifaceted contributions underscore his commitment to advancing knowledge and addressing pressing global challenges, establishing him as a luminary in both academic and environmental spheres.
                                </p>
                            </div>
                            <div className="mt-8 animated-cube"></div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="rounded-4xl w-full h-full object-cover aspect-w-4 aspect-h-5 hover:scale-105"
                            src="/img/reference_img/NP.png"
                            alt="Dr. Bernaurdshaw Neppolian"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Speakers;