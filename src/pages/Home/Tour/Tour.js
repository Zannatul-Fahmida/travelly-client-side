import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { _id, name, img, short_description } = props.tour;
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-secondary">{short_description}</Card.Text>
                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant="dark">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tour;