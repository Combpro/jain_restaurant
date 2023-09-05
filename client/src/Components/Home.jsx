import React from 'react'
import About from './About'
import Items from './Items'
import CarouselProg from './Carousel'
import Info from './Info'
import Response from './Response'
// import { Footer } from 'antd/es/layout/layout'
import Footer from './Footer'
import TestiMonials from './Testimonial'


const Home = () => {
  return (
    <div>
        <CarouselProg />
        <About />
        <Info />
        <Items />
        {/* <Response /> */}
       <TestiMonials />
        <Footer />
    </div>
  )
}

export default Home