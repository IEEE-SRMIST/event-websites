import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="flex justify-between items-center bg-white text-sm py-4 px-6">
                {/* Logo */}
                <a href="#" className="flex-none">
                    <img src="/img/Logo/Hacktrix_Logo.svg" alt="Hacktrix-Logo" className="w-36 h-16" />
                </a>

                {/* QR Code */}
                <a href="#" className="flex-none">
                    <img src="/img/reference_img/qrcode.png" alt="QR Code" className="w-24 h-24" />
                </a>
            </header>
        </div>
    );
};

export default Navbar;