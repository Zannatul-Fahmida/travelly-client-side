import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">Travelly</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="text-white text-center">Home</Nav.Link>
                    <Nav.Link as={Link} to="/login" className="text-center"><Button variant="outline-light" className="px-4">Login</Button></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;