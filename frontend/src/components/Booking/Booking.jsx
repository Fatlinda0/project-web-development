

import React, {useState}from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap";



export const Booking = ({blog}) => {
    const {maxGroupSize,reviews}= blog;


    const[credentials, setCredentials]= useState({
        userId:'01',
        userEmail:'example@gmail.com',
        fullName:'',
        phone:'',
        guestSize:'',
        bookAt:''

    })

 const handleChange=e=>{
    setCredentials=(prev=>({...prev, [e.target.id]:e.target.value}))
 };

 const handleClick = e =>{
    e.preventDefaul()

    console.log(credentials);
 }

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
    {/*Bookin boottom */}
    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-opx-0'>
                <h5 className='d-flex align-itemss-center gap-1'>
                    {maxGroupSize} <i class="ri-close-line"></i></h5>
                <span>{maxGroupSize}</span>
            </ListGroupItem>
            <ListGroupItem className='border-opx-0'>
                <h5>Service</h5>
                <span>10$</span>
            </ListGroupItem>
            <ListGroupItem className='border-opx-0 px-0 total'>
                <h5>Total</h5>
                <span>109$</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100mt-4' onClick={handleClick} >Book Now</Button>
    </div>
    </div>
  )
}
