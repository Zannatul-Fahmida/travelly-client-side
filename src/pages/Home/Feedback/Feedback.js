import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImg1 from '../../../images/carousel-img1.jpg';
import carouselImg2 from '../../../images/carousel-img2.jpg';

const Feedback = () => {
    return (
        <div className="my-5">
            <h2 className="text-center mb-5 fw-bold">Client Feedback</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <FontAwesomeIcon className="fs-1 p-2 border rounded-circle" icon={faUser} />
                        <h3>Lee Min hoo</h3>
                        <div>
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                        </div>
                        <p className="d-none d-md-block">Travelly team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using Travel Online for my holiday bookings again in the future!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <FontAwesomeIcon className="fs-1 p-2 border rounded-circle" icon={faUser} />
                        <h3>Eun sang</h3>
                        <div>
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="d-none d-md-block">I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Feedback;