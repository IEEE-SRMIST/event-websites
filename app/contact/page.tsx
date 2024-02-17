import React from 'react';
import Footer from '../components/HomePage/Footer/Footer';
import Navbar from '../components/HomePage/Navbar/Navbar';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p className="text-lg mb-4">
          We'd love to hear from you! If you have any questions, suggestions, or just want to say hello,
          feel free to reach out to us using the contact information below.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Email</h3>
          <p className="text-lg mb-4">
            General Inquiries: <a href="mailto:info@hactrix.com">info@hactrix.com</a>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Phone</h3>
          <p className="text-lg mb-4">
            Customer Support: +1 (123) 456-7890
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <p className="text-lg mb-4">
            Hactrix Headquarters
            <br />
            123 Tech Street
            <br />
            Cityville, Techland
            <br />
            Zip: 12345
          </p>
        </div>

        {/* Add a contact form or any additional contact details as needed */}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
