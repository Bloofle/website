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
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={modernSuite} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lightBulb} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={hottube} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={poollightchanger} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={musicsystem} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={candlelight} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Random Audio and fireflies</h3>
                            <p>This small circuit toggles the fireflies to fly around you when you enter the room</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={dooropener} alt="Effects" />
                        <Carousel.Caption>
                            <h3>Effects used for room</h3>
                            <p>These effects are responsible for creating sounds in Mountain Fuji View room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col><p>This room required quite a lot of work. I had to use triggers and particles and other stuff to make it look cool. Browse the gallery for details</p>
                </Col>
            </Row>
        </Container>
    );
}