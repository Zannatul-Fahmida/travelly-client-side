import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllBooked = (props) => {
    const { tourImg, tourName, name, email, tourPrice, _id, status } = props.booked;
    const [bookings, setBookings] = useState([]);
    const [updatedBooking, setUpdatedBooking] = useState([]);

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

    const handleUpdateStatus = id => {
        const url = `https://limitless-brook-90009.herokuapp.com/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully');
                    window.location.reload();
                    const updatedStatus= 'Approved';
                    const updatedBooking = { status: updatedStatus };
                    setUpdatedBooking(updatedBooking);
                    console.log(updatedBooking);
                }
            })
    }
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={tourImg} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text className="text-secondary">$ {tourPrice}</Card.Text>
                    <Card.Text className="text-secondary">User Name: {name}</Card.Text>
                    <Card.Text className="text-secondary">User Email: {email}</Card.Text>
                    <Card.Text className="text-secondary">{status}</Card.Text>
                    <div className="d-flex justify-content-evenly">
                        <Button variant="success" onClick={() => handleUpdateStatus(_id)}>Status</Button>
                        <Button variant="danger" onClick={() => handleDelete(_id)}>Cancel Booking</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllBooked;