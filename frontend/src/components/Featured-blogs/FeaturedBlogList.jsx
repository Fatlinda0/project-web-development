import React from 'react'
import BlogCard from '../../shared/BlogCard'
import blogData from '../../assets/data/blogs'
import { Col } from 'reactstrap'

const FeaturedBlogList = () => {
  return (
    <>
        {blogData?.map(blog => (
            <Col lg="3" className="mb-4" key={blog.id}>
                <BlogCard blog={blog} />
            </Col>
        ))}
    </>
  )
}

export default FeaturedBlogList