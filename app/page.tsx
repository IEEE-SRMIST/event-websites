"use client";

import React from 'react';
import Head from 'next/head';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>GenAI Workshop | IEEE SRMIST</title>
        <meta name="description" content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions." />
        <meta name="keywords" content="GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop" />
        <link rel="icon" href="/favicon.ico?v=3" />
      </Head>

    </div>
  );
};

export default HomePage;