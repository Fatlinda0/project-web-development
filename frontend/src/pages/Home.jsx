import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroineImg1 from '../assets/images/heroine-img1.jpg'
import heroineImg2 from '../assets/images/heroine-img2.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="heroine__content">
              <div className="heroine__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Do not Give Up'}/>
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
        </Row>
      </Container>
    </section>
  
  </>
}

export default Home