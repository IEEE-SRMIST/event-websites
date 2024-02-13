"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-black text-white py-4 px-4 lg:px-16">
            {/* Desktop layout */}
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="text-lg font-regular font-montserrat flex items-center">
                    {/* Logo */}
                    <img src="/img/hacktrix_logo.png" alt="Logo" className="mr-4 w-8 h-8" />
                </div>

                {/* Menu Button with Icon */}
                <div className="text-lg font-regular font-montserrat">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? (
                            <FeatherIcon icon="x" size={24} />
                        ) : (
                            <FeatherIcon icon="menu" size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="text-lg font-regular font-montserrat text-white">
                        <div className="my-4">
                            <Link href="/">HOME</Link>
                        </div>
                        <div className="my-4">
                            <Link href="/gallery">GALLERY</Link>
                        </div>
                        <div className="my-4">
                            <Link href="/register">REGISTER</Link>
                        </div>
                    </div>
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                        <FeatherIcon icon="x" size={24} />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
