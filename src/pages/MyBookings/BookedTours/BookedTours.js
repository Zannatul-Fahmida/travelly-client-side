import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const BookedTours = (props) => {
    const {tourImg, tourName, tourPrice, _id, status} = props.booked;   
    const [bookings, setBookings] = useState([]);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
        fetch(`https://limitless-brook-90009.herokuapp.com/booking/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('deleted successfully');
                window.location.reload();
                const remaining = bookings.filter(booked => booked._id !== id);
                setBookings(remaining);
            }
        })
    }
}
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={tourImg} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text className="text-secondary">$ {tourPrice}</Card.Text>
                    <Card.Text className="text-secondary">{status}</Card.Text>
                    <Button variant="danger" onClick={()=>handleDelete(_id)}>Cancel Booking</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookedTours;