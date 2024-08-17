"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from '../app/components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Speakers from './components/speakers/speakers';
import Timeline from './components/timeline/timeline';
import FAQ from './components/faq/faq';
import Footer from './components/footer/footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className='bg-black'>
      <Head>
        <title>GenAI Workshop | IEEE SRMIST</title>
        <meta name="description" content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions." />
        <meta name="keywords" content="GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop" />
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Timeline />
      <FAQ />
      <Footer />

    </div>
  );
};

export default HomePage;