"use client";

import React from 'react';

import Navbar from '@/app/components/HomePage/Navbar/Navbar';
import RegistrationForm from '@/app/components/RegistrationForm/RegistrationForm';
import Footer from '@/app/components/HomePage/Footer/Footer';

import '../app/globals.css';

const Registrations: React.FC = () => {
    return (
        <div className="bg-white">

            <Navbar />
            <RegistrationForm />
            <Footer />

        </div>
    );
};

export default Registrations;