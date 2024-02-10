import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SponsorList from './components/SponsorList/SponsorList';
import FAQ from './components/FAQ/FAQ';
import Testimonial from './components/Testimonial/Testimonial';
import IconSection from './components/IconSection/IconSection';
import AboutHactrix from './components/AboutHactrix/AboutHactrix';
import Judges from './components/Judges/Judges';
import Register from './components/Register/Register';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <Hero />
      <SponsorList />
      <IconSection />
      <AboutHactrix />
      <Judges />
      <Testimonial />
      <Register />
      <FAQ />
      
      <Footer />
    </div>
  );
};

export default HomePage;