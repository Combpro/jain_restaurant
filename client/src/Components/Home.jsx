import React from 'react'
import About from './About'
import Items from './Items'
import CarouselProg from './Carousel'
import Info from './Info'
import Response from './Response'

// import { Footer } from 'antd/es/layout/layout'

import TestiMonials from './Testimonial'


import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <CarouselProg />
        <About />
        <Info />
        <Items />

       <TestiMonials />

       

        <Footer />
    </div>
  )
}

export default Home