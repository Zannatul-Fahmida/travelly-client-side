import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { tourId } = useParams();
    const { user } = useAuth();
    const [tour, setTour] = useState([]);
    const [booking, setBooking] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    useEffect(() => {
        fetch(`https://limitless-brook-90009.herokuapp.com/tours/${tourId}`)
            .then(res => res.json())
            .then(data => {
                setTour(data)
                setBooking(data)
            })
    }, [tourId]);
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    const handleBooking = booking => {
        const tourId= booking._id;
        const tourName= booking.name;
        const tourImg= booking.img;
        const tourPrice= booking.price;
        const tourShortDescription= booking.short_description;
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const data = { tourId, tourName, tourImg, tourPrice, tourShortDescription, name, email };
        fetch(`https://limitless-brook-90009.herokuapp.com/addBooking`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Booked');
                }
            });
    };
    return (
        <Container className="my-4">
            <Row>
                <Col md={6} className="mb-5 mb-md-0">
                    <Image src={tour.img} fluid />
                    <h2>{tour.name}</h2>
                    <p>{tour.description}</p>
                    <h4>$ {tour.price}</h4>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleFormSubmit} className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h2 className="mb-3">Booking Information</h2>
                        <Form.Control type="text" className="mb-3" ref={nameRef} placeholder="Full Name" defaultValue={user?.displayName} />
                        <Form.Control type="email" className="mb-3" ref={emailRef} placeholder="email" defaultValue={user?.email} />
                        <Form.Control as="textarea" className="mb-3" rows={3} placeholder="Address" />
                        <Form.Control type="date" className="mb-3" />
                        <Button onClick={() => handleBooking(booking)}>Place Booking</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;