"use client";

import React from 'react';
import Navbar from './components/HomePage/Navbar/Navbar';
import HeroSection from './components/HomePage/HeroSection/HeroSection';
import SponsorsSection from './components/HomePage/SponsorsSection/SponsorsSection';
import AboutSection from './components/HomePage/AboutSection/AboutSection';
import EventHighlights from './components/HomePage/EventHighlights/EventHighlights';
import SpeakerSection from './components/HomePage/SpeakerSection/SpeakerSection';
import FAQ from './components/HomePage/FAQ/FAQ';
import Testimonial from './components/HomePage/Testimonial/Testimonial';
import RegistrationSection from './components/HomePage/RegistrationSection/RegistrationSection';
import Footer from './components/HomePage/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">

      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <EventHighlights />
      <SpeakerSection />
      <FAQ />
      <Testimonial />
      <RegistrationSection />
      <Footer />

    </div>
  );
};

export default HomePage;