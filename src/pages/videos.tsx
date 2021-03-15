import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import atlantis from '../media/atlantis.jpg';

export const Videos = () => {
    useEffect(() => { document.title = 'Bloofle: Videos'; }, []);

    return (
        <Container className="marketing">
            <h1>My Videos</h1>
            <Row>
                <Col>
                    <p>Have fun binging my videos! They are interesting so you won't get bored.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReactPlayer url="https://www.youtube.com/watch?v=_-TltwqkOI8" />
                </Col>
            </Row>
            <Row>&nbsp;</Row>
        </Container>
    );
}