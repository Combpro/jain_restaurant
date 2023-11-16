
import React from 'react';
import '../App.css';
import Footer from './Footer';

const AboutSection = () => {
  return (
    <div>


    <div className="about-section mb-8">
      <h2 className='text-3xl font-semibold text-orange-700 p-12'>About Jain Jalebi Restaurant</h2>
      <p className='p-2'>
        Welcome to Jain Jalebi, your go-to destination for delicious and
        mouth-watering jalebis and samosas in Gurgaon. We take pride in serving
        authentic Jain-friendly sweets and snacks.
      </p>
      <p className='p-2'>
        Our commitment to quality ingredients and traditional recipes ensures
        that every bite is a delightful experience. At Jain Jalebi, we strive to
        create a warm and inviting atmosphere for our customers to savor the
        flavors of our delectable treats.
      </p>
      <p className='p-2'>
        Whether you're a jalebi enthusiast or a samosa lover, our menu has
        something for everyone. Come and indulge in the rich taste of our Jain
        specialties crafted with love and care.
      </p>


    </div>
    < Footer/>
    </div>
  );
};

export default AboutSection;