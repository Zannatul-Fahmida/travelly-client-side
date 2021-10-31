import { faHandshake, faPlane, faSmileBeam, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WhyTravelly = () => {
    return (
            <Container className="text-center my-5">
                <h2 className="mb-5">Why You Will Travel With Travelly</h2>
                <Row className="gap-2">
                    <Col className="bg-dark text-white rounded py-5 px-0">
                    <FontAwesomeIcon className="fs-1 mb-2" icon={faUserSecret} />
                    <h4>2000+ Our worldwide guide</h4>
                    </Col>
                    <Col xs={12} md={3} className="bg-dark text-white rounded py-5 px-0">
                    <FontAwesomeIcon className="fs-1 mb-2" icon={faHandshake} />
                    <h4>100% trusted travel agency</h4>
                    </Col>
                    <Col xs={12} md={3} className="bg-dark text-white rounded py-5 px-0">
                    <FontAwesomeIcon className="fs-1 mb-2" icon={faPlane} />
                    <h4>10+ year of travel experience</h4>
                    </Col>
                    <Col className="bg-dark text-white rounded py-5 px-0">
                    <FontAwesomeIcon className="fs-1 mb-2" icon={faSmileBeam} />
                    <h4>90% of our traveller happy</h4>
                    </Col>
                </Row>
            </Container>
    );
};

export default WhyTravelly;