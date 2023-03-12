

import React from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap";



export const Booking = ({blog}) => {
    const {maxGroupSize,reviews}= blog

 const handleChange=e=>{};


  return (
    <div className='Booking'>
    <div className='booking__top d-flex align-items-center justify-conten-between'>
        <h3>{maxGroupSize}<span>/people</span></h3>

    </div>
    {/*Booking Form */}
    <div className="booking__form">
        <h5>Infoormation</h5>
        <Form className="bookiing__info-form">
            <FormGroup>
                <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange}/>
                <FormGroup><input type="number" placeholder="Phone" id="phone" required onChange={handleChange}/></FormGroup>
                <FormGroup className="d-flex align-items-center gap-3"> <input type="date" placeholder="" id="bookAt" required onChange={handleChange}/></FormGroup>
               <FormGroup><input type="number" placeholder="" id="guestSize" required onChange={handleChange}/></FormGroup>
                
            </FormGroup>

        </Form>
    </div>
    </div>
  )
}
