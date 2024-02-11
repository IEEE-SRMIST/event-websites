import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const galleryData = [
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/random/800x600?1',
      caption: 'Hackathon 2023',
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/random/800x600?2',
      caption: 'Team Building',
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/random/800x600?3',
      caption: 'Coding Session',
    },
    {
      id: 4,
      imageUrl: 'https://source.unsplash.com/random/800x600?4',
      caption: 'Networking Event',
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/random/800x600?5',
      caption: 'Project Showcase',
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/random/800x600?6',
      caption: 'Tech Talk',
    },
    {
      id: 7,
      imageUrl: 'https://source.unsplash.com/random/800x600?7',
      caption: 'Design Workshop',
    },
    {
      id: 8,
      imageUrl: 'https://source.unsplash.com/random/800x600?8',
      caption: 'Hackathon 2022',
    },
    {
      id: 9,
      imageUrl: 'https://source.unsplash.com/random/800x600?9',
      caption: 'Code Review',
    },
    {
      id: 10,
      imageUrl: 'https://source.unsplash.com/random/800x600?10',
      caption: 'Innovation Workshop',
    },
    {
      id: 11,
      imageUrl: 'https://source.unsplash.com/random/800x600?11',
      caption: 'Team Building 2',
    },
    {
      id: 12,
      imageUrl: 'https://source.unsplash.com/random/800x600?12',
      caption: 'Coding Workshop',
    },
    {
      id: 13,
      imageUrl: 'https://source.unsplash.com/random/800x600?13',
      caption: 'Networking Event 2',
    },
    {
      id: 14,
      imageUrl: 'https://source.unsplash.com/random/800x600?14',
      caption: 'Tech Talk 2',
    },
];

const GalleryPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map((item) => (
            <div key={item.id} className="mb-4">
              <img
                className="w-full h-auto object-cover rounded-md shadow-md"
                src={item.imageUrl}
                alt={item.caption}
              />
              <p className="text-center mt-2">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
