import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://limitless-brook-90009.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <Container className="my-5">
            <h2 className="text-center mb-5 fw-bold">Best Tours</h2>
            {
                tours.length > 0 ?
                    <Row xs={1} md={3} className="g-4">
                        {tours.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        ></Tour>)}
                    </Row>
                    :
                    <div className="text-center">
                        <Spinner animation="border" />
                    </div>
            }
        </Container>
    );
};

export default Tours;