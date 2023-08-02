import React from 'react';
import '../styles.css';



function TourCard({tour}){
    const {id,image,date,title,info,location,duration,cost} = tour;
    return(
            <div key={id} className='tour-card'>
                    <div className="top">
                       <img src={image} alt="tour destination img" />
                       <p>{date}</p>
                    </div>
                    <div className="bottom">
                        <h4>{title}</h4>
                        <p className='info'>{info}</p>
                        <div className="tour-footer">
                            <p>{location}</p>
                            <p>From ${cost}</p>
                            <p>{duration} Days</p>
                        </div>
                    </div>
            </div>
    )
}

export default TourCard;