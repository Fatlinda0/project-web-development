import React, {useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from "reactstrap"

const SearchBar = () => {
    
    const locationRef = useRef('')
    const maxGroupSizeRef = useRef('')

    const searchHandler = () => {
        const location = locationRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location==='' || maxGroupSize===''){
            return alert("All fields are required!");
        }
    }

    return <Col lg='1'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                        <i class="ri-article-line"></i>
                    </span>
                    <div>
                        <h6>Blog</h6>
                        <input type="text" placeholder="What're you looking for?" 
                        ref= {locationRef} />
                  </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                        <i class="ri-group-fill"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref= {maxGroupSizeRef} />
                    </div>
                </FormGroup>
                <span className="search__icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
}

export default SearchBar