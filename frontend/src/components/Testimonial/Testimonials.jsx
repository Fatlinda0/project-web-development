import React from 'react'
import Slider from 'react-slick'
import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {
  const settings= {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,

    responsive:[ 
      {
        breakpoint: 992,
        settings: {
          slidesToSlide: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToSlide: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }

  return ( 
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda dolorum, facere, harum sed incidunt cum debitis atque aliquam 
          molestias tempora, delectus similique aliquid. Amet nam, qui nisi quis 
          porro saepe ea id?</p>
      
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className="mb-0 mt-3">Monika Evans</h5>
            <p>Fan</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda dolorum, facere, harum sed incidunt cum debitis atque aliquam 
          molestias tempora, delectus similique aliquid. Amet nam, qui nisi quis 
          porro saepe ea id?</p>
      
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className="mb-0 mt-3">Charles Doe</h5>
            <p>Fan</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda dolorum, facere, harum sed incidunt cum debitis atque aliquam 
          molestias tempora, delectus similique aliquid. Amet nam, qui nisi quis 
          porro saepe ea id?</p>
      
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lena Gashi</h5>
            <p>Fan</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda dolorum, facere, harum sed incidunt cum debitis atque aliquam 
          molestias tempora, delectus similique aliquid. Amet nam, qui nisi quis 
          porro saepe ea id?</p>
      
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className="mb-0 mt-3">Monika Evans</h5>
            <p>Fan</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Assumenda dolorum, facere, harum sed incidunt cum debitis atque aliquam 
          molestias tempora, delectus similique aliquid. Amet nam, qui nisi quis 
          porro saepe ea id?</p>
      
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5 className="mb-0 mt-3">Charles Doe</h5>
            <p>Fan</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonials