"use client";

import React from 'react';
import Navbar from '@/app/components/HomePage/Navbar/Navbar';
import Footer from '@/app/components/HomePage/Footer/Footer';
import IntroductionSection from '@/app/components/MentorsPage/IntroductionSection/IntroductionSection';
import MentorProfiles from '@/app/components/MentorsPage/MentorProfiles/MentorProfiles';

import '../app/globals.css';

const MentorsPage: React.FC = () => {
    return (
        <div className="bg-white">

            <Navbar />
            <IntroductionSection />
            <MentorProfiles />
            <Footer />

        </div>
    );
};

export default MentorsPage;