import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const AllBooked = (props) => {
    const { tourImg, tourName, name, email, tourPrice, _id } = props.booked;
    const { handleDelete } = props.handleDelete;
    const [status, setStatus] = useState('Pending');
    return (
        <Col>
            <Card className="shadow h-100">
                <Card.Img variant="top" src={tourImg} />
                <Card.Body>
                    <Card.Title>{tourName}</Card.Title>
                    <Card.Text className="text-secondary">$ {tourPrice}</Card.Text>
                    <Card.Text className="text-secondary">User Name: {name}</Card.Text>
                    <Card.Text className="text-secondary">User Email: {email}</Card.Text>
                    <div className="d-flex justify-content-evenly">
                    <Button variant="success" onClick={()=>setStatus('Approved')}>{status}</Button>
                    <Button variant="danger" onClick={()=>handleDelete(_id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllBooked;