import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data';
import '../styles.css'

function Services(){
    return(
        <div className='Services'>
            <h1>OUR <span>SERVICES</span></h1>
            <div className="service-card-div">
            {services.map(service => {
                return( <ServiceCard service={service} />)
            })}
            </div>
        </div>
    );
}

export default Services;