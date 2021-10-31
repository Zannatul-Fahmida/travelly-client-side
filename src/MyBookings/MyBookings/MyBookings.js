import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Row} from 'react-bootstrap';
import BookedTours from '../BookedTours/BookedTours';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-brook-90009.herokuapp.com/myBooking/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email]);

    return (
        <Container className="my-4 text-center">
            <h2 className="mb-4">My Bookings</h2>
            <Row xs={1} md={3} className="g-4">
               {
                   myBookings.map(booked =><BookedTours
                   key={booked.tourId}
                   booked={booked}
                   ></BookedTours>)
               }
            </Row>
        </Container>
    );
};

export default MyBookings;