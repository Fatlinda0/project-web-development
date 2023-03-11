import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './blog-card.css'
import calculateAvgRating from '../utils/avgRating'

const BlogCard = ({blog}) => {
    const { id, title, city, photo, featured, maxGroupSize, reviews } = blog

    const { totalRating, avgRating } = calculateAvgRating(reviews)
  
    return (
    <div className="blog__card">
        <Card>
            <div className="blog__img">
                <img src={photo} alt="" />
                {featured && <span>Featured</span>}
            </div>

            <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="blog__location d-flex align-items-center gap-1">
                        <i class="ri-map-pin-fill"></i> {city}
                    </span>
                    <span className="blog__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                            'Not rated' 
                        ) : ( 
                            <span>
                                ({reviews.length})
                            </span>
                        )}
                    </span>
                </div>
                <h5 className="blog__title">
                    <Link to={`/blogs/${id}`}>{title}</Link>
                </h5>
                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h6>{maxGroupSize} <span> people</span></h6>          
                    <button className="btn reading_btn">
                        <Link to={`/blogs/${id}`}>Read now</Link>
                    </button>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default BlogCard