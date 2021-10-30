import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-bg">
            <Container className="d-flex flex-column align-items-center justify-content-center h-100">
                <div className="bg-dark w-50 h-50 text-white d-flex flex-column justify-content-center align-items-center">
                <h1><FontAwesomeIcon icon={faPlane} />Travelly</h1>
                <p>Login now for a amazing tour</p>
                <Button onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle} /> Continue With Google</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;