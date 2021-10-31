import { faCampground, faFire, faHiking, faMapMarkedAlt, faMapSigns, faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Activity = () => {
    return (
        <div className="my-5 mx-4 mx-md-0">
            <Container className="text-center">
                <h2 className="mb-5">Adventure and Activity</h2>
                <Row className="gap-2">
                    <Col xs={6} md={2} className="border px-4 py-5">
                    <FontAwesomeIcon icon={faMountain} />
                    <h4>Adventure</h4>
                    </Col>
                    <Col className="border px-4 py-5">
                    <FontAwesomeIcon icon={faFire} />
                    <h4>Camp Fire</h4>
                    </Col>
                    <Col className="border px-4 py-5">
                    <FontAwesomeIcon icon={faMapSigns} />
                    <h4>Off Road</h4>
                    </Col>
                    <Col className="border px-4 py-5">
                    <FontAwesomeIcon icon={faCampground} />
                    <h4>Camping</h4>
                    </Col>
                    <Col className="border px-4 py-5">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    <h4>Exploring</h4>
                    </Col>
                    <Col className="border px-4 py-5">
                    <FontAwesomeIcon icon={faHiking} />
                    <h4>Hiking</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Activity;