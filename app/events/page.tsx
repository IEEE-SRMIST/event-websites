import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const EventsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Hackathon 2024</h3>
          <p className="text-lg mb-4">
            Join us for an exhilarating hackathon where participants from all over the world will showcase
            their coding skills and innovative solutions. Get ready for 48 hours of non-stop coding, learning,
            and collaboration.
          </p>
          <p className="text-sm text-gray-500">Date: March 15-17, 2024</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Tech Talk Series</h3>
          <p className="text-lg mb-4">
            Attend our Tech Talk Series featuring industry experts who will share insights on the latest
            technologies, trends, and best practices. Expand your knowledge and network with professionals
            in the tech community.
          </p>
          <p className="text-sm text-gray-500">Next Talk: April 5, 2024</p>
        </div>

        {/* Add more events as needed */}

        <h2 className="text-3xl font-bold mb-4">Past Events</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">CodeCamp 2023</h3>
          <p className="text-lg mb-4">
            CodeCamp 2023 was a huge success, bringing together coding enthusiasts for a weekend of learning
            and collaboration. Participants worked on exciting projects and showcased their skills to the tech community.
          </p>
          <p className="text-sm text-gray-500">Date: November 10-12, 2023</p>
        </div>

        {/* Add more past events as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default EventsPage;
