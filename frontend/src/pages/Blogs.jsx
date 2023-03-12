import React, {useState, useEffect} from 'react'; 
import CommonSection from "../shared/CommonSection";

import "../styles/blogs.css";
import blogData from '../assets/data/blogs'
import SearchBar from './../shared/SearchBar'
import BlogCard from '../shared/BlogCard';
import BlogsNews from './../shared/Blognews';
import { Container, Row, Col } from 'reactstrap';


const Blogs = () => {

  const [pageCount, setPageCount]=useState(0)
  const [page,setPage]= useState(0)

  useEffect(()=>{

    const pages = Math.ceil(5/4)// later 
    setPageCount(pages)
  },[page])

  return (
  <>
    <CommonSection tittle={"All Blogs"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            blogData?.map(blog=> (<Col lg='3' className='mb-4' key={blog.id}><BlogCard blog={blog}/></Col>))
          }

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number=> (
                  <span key={number} 
                  onClick={()=> setPage(number)}
                  classssName={page === number ? "active__page" : ""}
                  >
                 {number+1}
                  </span>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <BlogsNews />
  </>
  ) 
};

export default Blogs
