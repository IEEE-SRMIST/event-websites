"use client";

import React from 'react';
import Navbar from './components/HomePage/Navbar/Navbar';
import HeroSection from './components/HomePage/HeroSection/HeroSection';
import Sponsors from './components/HomePage/Sponsors/Sponsors';
import AboutSection from './components/HomePage/AboutSection/AboutSection';
import EventHighlights from './components/HomePage/EventHighlights/EventHighlights';
import Speakers from './components/HomePage/Speakers/Speakers';
import EventTimeline from './components/HomePage/EventTimeline/EventTimeline';
import JudgingCriteriaSection from './components/HomePage/JudgingCriteriaSection/JudgingCriteriaSection';
import MentorProfiles from './components/HomePage/MentorProfiles/MentorProfiles';
import FAQ from './components/HomePage/FAQ/FAQ';
import Testimonial from './components/HomePage/Testimonial/Testimonial';
import Registration from './components/HomePage/Registration/Registration';
import Footer from './components/HomePage/Footer/Footer';
import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">

      <Navbar />
      <HeroSection />
      <Sponsors />
      <AboutSection />
      <EventHighlights />
      <MentorProfiles />
      <FAQ />
      <Testimonial />
      <Registration />
      <Footer />

    </div>
  );
};

export default HomePage;