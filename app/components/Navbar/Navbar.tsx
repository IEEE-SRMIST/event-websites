import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white py-4 px-4 lg:px-16">
            {/* Desktop layout */}
            <div className="hidden sm:block">
                <div className="max-w-screen-xl mx-auto flex justify-center">
                    <div className="w-full lg:w-[1440px] flex-grow text-center text-2xl font-bold font-montserrat">
                        <Link href="/">HOME</Link>
                    </div>
                    <div className="w-full lg:w-[1440px] flex-grow text-center text-2xl font-bold font-montserrat">
                        <Link href="/about">ABOUT</Link>
                    </div>
                    <div className="w-full lg:w-[1440px] flex-grow text-center text-2xl font-bold font-montserrat">
                        <Link href="/events">EVENTS</Link>
                    </div>
                    <div className="w-full lg:w-[1440px] flex-grow text-center text-2xl font-bold font-montserrat">
                        <Link href="/blog">BLOG</Link>
                    </div>
                    <div className="w-full lg:w-[1440px] flex-grow text-center text-2xl font-bold font-montserrat">
                        <Link href="/contact">CONTACT</Link>
                    </div>
                </div>
            </div>

            {/* Mobile layout */}
            <div className="block sm:hidden text-center">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-lg font-regular font-montserrat">
                        <Link href="/">HOME</Link> | <Link href="/about">ABOUT</Link>
                    </div>
                    <div className="text-lg font-regular font-montserrat">
                        <Link href="/events">EVENTS</Link> | <Link href="/blog">BLOG</Link> | <Link href="/contact">CONTACT</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;