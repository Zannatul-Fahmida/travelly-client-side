import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllBooked from '../AllBooked/AllBooked';

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://limitless-brook-90009.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, []);
    return (
        <Container className="my-4 text-center">
            <h2 className="mb-4">All Bookings</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    allBookings.map(booked => <AllBooked
                        key={booked.tourId}
                        booked={booked}
                    ></AllBooked>)
                }
            </Row>
        </Container>
    );
};

export default AllBookings;