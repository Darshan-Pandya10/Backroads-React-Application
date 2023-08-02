import React from 'react';
import about from '../images/about.jpeg';
import '../styles.css'

function About(){
    return(
        // about div starts
        <div className='about'>
            <h1>ABOUT <span>US</span></h1>
            {/* img-para div */}
            <div className="img-para">
            {/* left-img div */}
            <div className="left-img">
            <div className='image-border'></div>
            <img className='about-image' src={about} alt="beach image" />
            </div>
            {/* para */}
            <div className="para">
                <h2>Explore The Difference</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor</p>

                <a href="#">READ MORE</a>
            </div>
            {/* para ends */}
            </div>
            {/* img-para ends */}
        </div>
        // about div ends
    );
}

export default About;