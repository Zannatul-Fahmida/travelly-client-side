import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3"><FontAwesomeIcon icon={faPlane} />Travelly</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home" className="text-white text-center">Home</Nav.Link>
                    {
                        user.email ?
                            <div className="d-flex flex-md-row flex-column align-items-center">
                                <Nav.Link as={Link} to="/myBookings" className="text-white text-center">My Bookings</Nav.Link>
                                <Nav.Link as={Link} to="/allBookings" className="text-white text-center">Manage All Bookings</Nav.Link>
                                <Nav.Link as={Link} to="/addNewTour" className="text-white text-center">Add A New Tour</Nav.Link>
                                <Nav.Link as={Link} to="/" className="text-white text-center">{user.displayName}</Nav.Link>
                                <Button variant="outline-light" className="px-4" onClick={logOut}>LogOut</Button>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login" className="text-center"><Button variant="outline-light" className="px-4">Login</Button></Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;