import React from 'react';

const Navbar = () => {
    return (
        <div>

            <header className="flex justify-between items-center bg-white text-sm py-4 px-6">
                {/* Logo */}
                <a href="#" className="flex-none hover:scale-105">
                    <img src="/img/Logo/Hacktrix_Logo.svg" alt="Hacktrix-Logo" className="w-36 h-16" />
                </a>

                {/* QR Code */}
                <a
                    href="https://registrations.ieeesrmist.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none relative group">
                    <img
                        src="/img/Logo/qr-code.svg"
                        alt="QR Code"
                        className="w-14 h-14 transition-all duration-300 transform group-hover:border-4 group-hover:border-orange rounded-md" />
                    <div className="absolute inset-0 border-4 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md"></div>
                </a>
            </header>

        </div>
    );
};

export default Navbar;