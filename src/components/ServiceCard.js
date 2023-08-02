import React from 'react';
import '../styles.css'


function ServiceCard({service}){
    const {id,icon,title,text} = service;
    return(
            <div key={id} className='service-card'>
                    <div className="service-img">
                        <i className={icon}></i>
                    </div>
                    <div className="service-details">
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
            </div>
    )
}

export default ServiceCard;