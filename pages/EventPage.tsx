"use client";

import React from 'react';
import Navbar from '@/app/components/HomePage/Navbar/Navbar';
import Footer from '@/app/components/HomePage/Footer/Footer';
import EventBanner from '@/app/components/EventPage/EventBanner/EventBanner';
import EventTimeline from '@/app/components/EventPage/EventTimeline/EventTimeline';
import JudgingCriteriaSection from '@/app/components/EventPage/JudgingCriteriaSection/JudgingCriteriaSection';

import '../app/globals.css';

const EventPage: React.FC = () => {
    return (
        <div className="bg-white">

            <Navbar />
            <EventBanner />
            <EventTimeline />
            <JudgingCriteriaSection />
            <Footer />

        </div>
    );
};

export default EventPage;