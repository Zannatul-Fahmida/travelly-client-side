import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg d-flex flex-column justify-content-center align-items-center">
            <div className="banner-text-bg text-center p-5 d-flex flex-column align-items-center">
                <h1 className="mb-3">Enjoy the tour with Travelly</h1>
                <p className="w-75">We provide travelers with an authentic Jordanian experience that they can remember for the rest of their lives</p>
                <Button variant="dark">Book Now</Button>
            </div>
        </div>
    );
};

export default Banner;