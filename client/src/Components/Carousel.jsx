import React from 'react'

const CarouselProg = () => {
  return (
    <div className='h-screen mdm:h-2/4'>

<div id="carouselExampleFade" className="carousel slide carousel-fade h-screen mdm:h-2/4">
  <div className="carousel-inner h-screen mdm:h-2/4">
    <div className="carousel-item active h-screen-1/2">
      <img src="https://www.mashed.com/img/gallery/what-you-should-know-before-eating-another-jalebi/l-intro-1619484872.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item h-screen-1/2">
      <img src="https://i.pinimg.com/736x/06/d9/7f/06d97f756799596057a0e7e759f4a7e1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item h-screen-1/2">
      <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg" className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default CarouselProg
