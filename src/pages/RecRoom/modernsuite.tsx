import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import modernSuite from '../../media/recroom/themodernsuite.jpg';
import lightBulb from '../../media/wires/lightbulb.jpg';
import candlelight from '../../media/wires/candlelight.jpg';
import dooropener from '../../media/wires/dooropener.jpg';
import overview from '../../media/wires/modernsuitepicture.jpg'
import hottube from '../../media/wires/hottubbubbles.jpg';
import musicsystem from '../../media/wires/musicsystemsuite.jpg';
import poollightchanger from '../../media/wires/poollightchanger.jpg';

export const ModernSuite = () => {
    useEffect(() => { document.title = 'Bloofle: Modern suite in details'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Modern Suite Gallery</h1>
            <Row>
                <Carousel>
                <Carousel.Item>
                        <img className="d-block w-100" src={overview} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>My Modern Suite</h3>
                            <p className="centered">This room is filled with great lighting and circuitry.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightBulb} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>The Lighting</h3>
                            <p className="centered">One lightbulb with maximum range fills the entire room!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={hottube} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Hot Tub</h3>
                            <p className="centered">This hot tub can turn on the bubbles and turn them off.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={poollightchanger} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Pool Lights</h3>
                            <p className="centered">This circuit changes the lights colour every 20 seconds.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={musicsystem} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Music System</h3>
                            <p className="centered">This is what makes up the rooms entire music.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col><p>This room was my first proud work in Recroom. It is a penthouse type building which has cool architecture.</p>
                </Col>
            </Row>
        </Container>
    );
}