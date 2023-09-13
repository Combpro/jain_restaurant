import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestimonialDetail'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../Assets/t1.jpg';
import img2 from '../Assets/t2.jpg';
import img3 from '../Assets/t3.jpg';
import img4 from '../Assets/t4.jpg';
import '../styles/Testimonial.css'

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Pragyan',
            description: 'The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness.',
            address: 'Gurgaon',
            img: `${userPic}`
        },
        {
            name: 'Sushmita',
            description: 'The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness.',
            address: 'Delhi',
            img: img3
        },
        {
            name: 'Rajesh',
            description: 'The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness. ',
            address: 'Gurgoan',
            img: img2
        },
        {
            name: 'Radhika',
            description: 'The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness. ',
            address: 'UP',
            img: img4
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="font-bold smm:text-2xl text-4xl font-serif text-center">TESTIMONIALS</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle font-mono  pt-2">What Our Clients are Saying?</h3>
                </div>
               
                <div className="row">
                    <div className="col-md-12 mdm:col-md-6">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={img4} />

                                            <p>The jalebis at this restaurant are a true delight! Crispy on the outside, soft on the inside, and dripping with just the right amount of sweetness. </p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Radhika Roy</h5>
                                            <small>UP</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;