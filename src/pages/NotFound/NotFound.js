import React from 'react';
import { Image } from 'react-bootstrap';
import notfound from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Image src={notfound} fluid />
        </div>
    );
};

export default NotFound;