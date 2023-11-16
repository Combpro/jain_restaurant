import React from 'react';
import '../styles/ContactSection.css';
import Footer from './Footer';

const ContactSection = () => {
  return (
    <div>

   
    <div className="contact-section mb-8">
      <h2 className='text-orange-800 font-semibold font-serif p-12'>Contact Us</h2>
      <p>
        <strong>Jain Jalebi Restaurant</strong>
      </p>
      <p>Address: 123 Sadar Bazar, Gurgaon</p>
      <p>Phone: +91 123 456 7890</p>
      <p>Email: info@jainjalebi.com</p>
      <p>Follow us on social media:</p>
      <div className="social-links">
        <a href="https://facebook.com/jainjalebi" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/jainjalebi" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com/jainjalebi" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
<Footer />
    </div>
  );
};

export default ContactSection;