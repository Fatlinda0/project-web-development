import React from 'react'
import '../styles/blog-details.css'
import { Container, Row, Col, Form } from 'reactstrap'
import {useParams} from 'react-router-dom'
import blogData from '../assets/data/blogs'
import calculateAvgRating from '../utils/avgRating'
import { Booking } from '../components/Booking/Booking'


const BlogDetails = () => {
  const {id}= useParams()
  const blog= blogData.find(blog=>blog.id===id)

  const {photo, title, description, reviews, city, maxGroupSize}=blog

  const {totalRating,avgRating}=calculateAvgRating(reviews)

  return <>  
  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className="blog__content">
            <img src={photo} alt="" />

            <div className="blog__info">
              <h2>
                {title}
              </h2>
              <div className='d-flex align-itmes-center gap-5'>
              <span className="blog__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i> {calculateAvgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                            'Not rated' 
                        ) : ( 
                            <span>
                                ({reviews?.length})
                            </span>
                        )}
                    </span>
                    
              </div>
              <div className="blog__extra-details">
                <span> <i class="ri-map-pin-2-line"></i>{city}</span>
                <span> <i class="ri-group-line"></i>{maxGroupSize}</span>
              </div>
              <h5>Description</h5>
              <p>{description}</p>
            </div>
            {/* ky eshte sektori per reviews */}
          <div className="tour__reviws mt-4">
            <h4>Reviews({reviews?.length}reviews)</h4>
            <Form>
              <div className="d-flex align-itmes-center gap-3 mb-4 rating__group">
               1<span><i class="ri-star-s-fill"></i></span>
               2<span><i class="ri-star-s-fill"></i></span>
               3<span><i class="ri-star-s-fill"></i></span>
               4<span><i class="ri-star-s-fill"></i></span>
               5<span><i class="ri-star-s-fill"></i></span>
              </div>
            </Form>
          </div>
          {/*ketu mbaron sektori i reviews */}
          </div>
          
          <Col lg="4">
            <Booking blog={blog} />
          </Col>

        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default BlogDetails