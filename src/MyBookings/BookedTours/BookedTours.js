import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const BookedTours = (props) => {
    const {tourImg, tourName, tourPrice} = props.booked;
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={tourImg} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text className="text-secondary">$ {tourPrice}</Card.Text>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookedTours;