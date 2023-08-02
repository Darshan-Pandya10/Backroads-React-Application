import React from 'react';
import { tours } from '../data';
import '../styles.css'
import TourCard from './TourCard';

function Tours(){
    return(
        <div className='Tours'>
            <h1>FEATURED <span>TOURS</span></h1>
            <div className="Tours-card-div">
            {tours.map(tour => {
                return( <TourCard tour={tour} />)
            })}
            </div>
        </div>
    );
}

export default Tours;