import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddNewTour = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const shortDescriptionRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const handleAddTour = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const short_description = shortDescriptionRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const newTour = { name, img, short_description, description, price };
        fetch('https://limitless-brook-90009.herokuapp.com/addTours', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added a tour');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <Container className="d-flex flex-column align-items-center my-5">
            <h2 className="mb-3">Add A New Tour</h2>
            <Form onSubmit={handleAddTour} className="d-flex flex-column justify-content-center w-50">
                <Form.Control className="mb-2" type="text" ref={nameRef} placeholder="Tour name" />
                <Form.Control className="mb-2" type="text" ref={imgRef} placeholder="Tour image URL" />
                <Form.Control className="mb-2" type="text" ref={shortDescriptionRef} placeholder="Short description" />
                <Form.Control className="mb-2" type="text" ref={descriptionRef} placeholder="Description" />
                <Form.Control className="mb-2" type="number" ref={priceRef} placeholder="Price" />
                <Button type="submit">Add Tour</Button>
            </Form>
        </Container>
    );
};

export default AddNewTour;