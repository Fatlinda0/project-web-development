import React from 'react'
import './blognews.css'
import { Container, Row, Col } from 'reactstrap'
import femaleBlogger from '../assets/images/female-blog.png'

const Blognews = () => {
    return (
        <section className="blognews">
          <Container>
            <Row>
              <Col lg='6'>
                <div className="blognews__content">
                  <h2>Subscribe now to get useful blogging information.</h2>
                  <div className="blognews__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn blognews__btn">Subscribe</button>
                  </div>
    
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quibusdam harum quas quo repellat?</p>
                </div>
              </Col>
              <Col lg='6'>
                <div className="blognews__img">
                  <img src={femaleBlogger} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
}

export default Blognews