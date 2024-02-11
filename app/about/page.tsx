import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar /> {/* You may or may not need a navbar on the about page */}

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">About Hactrix</h2>
        <p className="text-lg mb-4">
          Welcome to Hactrix, a platform dedicated to fostering innovation and collaboration in the tech community.
          Our mission is to provide a space for developers, designers, and tech enthusiasts to come together,
          showcase their skills, and learn from each other.
        </p>

        <h3 className="text-2xl font-bold mb-2">Our Goals</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Encourage creativity and problem-solving.</li>
          <li>Promote collaboration and networking.</li>
          <li>Provide opportunities for skill development.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-2">What We Offer</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Exciting hackathons and coding challenges.</li>
          <li>Insightful talks and workshops by industry experts.</li>
          <li>A supportive community of like-minded individuals.</li>
        </ul>

        {/* You can add more sections about your team, values, achievements, etc. */}
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
