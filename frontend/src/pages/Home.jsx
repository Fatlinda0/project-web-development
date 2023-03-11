import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroineImg1 from '../assets/images/heroine-img1.jpg'
import heroineImg2 from '../assets/images/heroine-img2.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedBlogList from '../components/Featured-blogs/FeaturedBlogList'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="heroine__content">
              <div className="heroine__subtitle d-flex align-items-center">
                <img src={worldImg} alt="" />
              </div>
              <h1>Blogging helps you to share your 
                <span className='highlight'> thoughts</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam recusandae, 
                delectus mollitia id eaque fugit porro, expedita, cupiditate nulla dicta quod 
                ut dignissimos illum repellat aliquam impedit rem magni dolores dolorum.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className='heroine__img-box'>
              <img src={heroineImg1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className='heroine__img-box mt-4'>
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='heroine__img-box mt-5'>
              <img src={heroineImg2} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* ------- HEROINE SECTION START ------- */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    { /* ------ featured blog section start  ----- */ }
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h5 className="services__subtitle">Explore</h5>
            <h2 className="featured__blog-title">Our featured blogs</h2>
          </Col>
          <FeaturedBlogList />
        </Row>
      </Container>
    </section>
    
    { /* ------ featured blog section end  ----- */ }
    
    { /* ------ experience section start  ----- */ }
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <h5 className="services__subtitle">Experience</h5>
              <h2>
                We'll provide you with life guidance <br /> based on all of our experience
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> 
              Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful blog</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Visitors</h6>
              </div>
              <div className="counter__box">
                <span>7</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    { /* ------ experience section end  ----- */ }

  </>
}

export default Home