import React from 'react';

const AboutSection = () => {
    return (

        <div className="max-w-[85rem] mt-8 lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black text-white">
            <div className="group aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                    className="w-full object-cover rounded-xl lg:rounded-xl transition-transform transform group-hover:scale-105"
                    src="/img/sample_img/About_Banner.png"
                    alt="IEEE SRM Student Branch"
                />
            </div>
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-body font-bold text-2xl hover:text-orange md:text-3xl">
                        Discover IEEE SRMIST Student Branch
                    </h2>
                    <h3 className="mt-2 md:mt-4 text-sm font-body text-gray-300">
                        IEEE SRM Student Branch is a dynamic community dedicated to fostering technological innovation and excellence. As a proud chapter of the world's largest professional organization, IEEE, we strive to inspire, educate, and empower our members.
                    </h3>
                </div>
                <div className="lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                        <IconBlock
                            title="Our Founding"
                            content="IEEE SRMIST SB was established in 2015 with a vision to inspire, educate, and empower the next generation of engineers and innovators."
                        />
                        <IconBlock
                            title="Our Values"
                            content="We are driven by innovation, education, community, and excellence. These values guide our actions and initiatives."
                        />
                        <IconBlock
                            title="Our Journey"
                            content="Over the years, we've organized impactful events, workshops, and initiatives, fostering talent and technological advancement."
                        />
                        <IconBlock
                            title="Membership Benefits"
                            content="Joining IEEE opens doors to a world of resources, networking, and professional development opportunities."
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

interface IconBlockProps {
    title: string;
    content: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ title, content }) => {
    return (
        <div className="flex gap-x-5">
            <div className="grow">
                <h3 className="text-2xl font-body font-bold cursor-auto">
                    {title}
                </h3>
                <p className="mt-1 text-sm font-body text-gray-300">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default AboutSection;