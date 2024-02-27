"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/HomePage/Navbar/Navbar';
import HeroSection from './components/HomePage/HeroSection/HeroSection';
import Sponsors from './components/HomePage/Sponsors/Sponsors';
import AboutSection from './components/HomePage/AboutSection/AboutSection';
import EventHighlights from './components/HomePage/EventHighlights/EventHighlights';
import Speakers from './components/HomePage/Speakers/Speakers';
import EventTimeline from './components/HomePage/EventTimeline/EventTimeline';
import EventWorkflow from './components/HomePage/EventWorkflow/EventWorkflow';
import FAQ from './components/HomePage/FAQ/FAQ';
import Testimonial from './components/HomePage/Testimonial/Testimonial';
import Registration from './components/HomePage/Registration/Registration';
import Footer from './components/HomePage/Footer/Footer';
import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>HackTrix | IEEE SRM</title>
        <meta name="description" content="Hacking makes you lose CTRL;" />
        <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, Hactrix-24, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/Logo/apple-touch-icon.png" />
        <meta property="og:title" content="HackTrix | IEEE SRM" />
        <meta property="og:description" content="Hacking makes you lose CTRL;" />
        <meta property="og:image" content="/Images/Event_Images/Banner1.png" />
        <meta property="og:url" content="" />
      </Head>

      <Navbar />
      <HeroSection />
      <Sponsors />
      <AboutSection />
      <EventHighlights />
      <Speakers />
      <EventTimeline />
      <EventWorkflow />
      <FAQ />
      <Testimonial />
      <Registration />
      <Footer />

    </div>
  );
};

export default HomePage;