import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import animatedLights from '../../media/wires/animatedlights.jpg';
import spinningWind from '../../media/wires/spinningwindrotator.jpg';
import spinningFish from '../../media/wires/spinningfishrotator.jpg';
import atlantisHeader from '../../media/recroom/atlantissideviewq.jpg';

export const GateToAtlantis = () => {
    useEffect(() => { document.title = 'Bloofle: Gate To Atlantis in details'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Gate to Atlantis Gallery</h1>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={animatedLights} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={spinningWind} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Circuit to toggle fireflies</h3>
                            <p>This small circuit toggles the fireflies to fly around you when you enter the room</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={spinningFish} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Swimming fish imitation circuit</h3>
                            <p>This small circuit creates an effect of fishes swimming around you</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={atlantisHeader} alt="Effects" />
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