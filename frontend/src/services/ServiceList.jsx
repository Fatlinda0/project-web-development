import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap"

import inspirationImg from '../assets/images/inspiration.png'
import travelImg from '../assets/images/travel.png'
import communicationImg from '../assets/images/communication.png'

const servicesData = [
    {
        imgUrl: inspirationImg,
        title: "Inspiration",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.",
    },
    {
        imgUrl: travelImg,
        title: "Vacation trips",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.",
    },
    {
        imgUrl: communicationImg,
        title: "Communication",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.",
    },

]

const ServiceList = () => {
  return ( 
    <>
        {servicesData.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList