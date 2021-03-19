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
                            <h3>Artificial Animated Lights</h3>
                            <p className="centered">These lights are moving constantly to make a magical effect when entering the room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={spinningWind} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Spinning Wind Particle Effect</h3>
                            <p>The wind particle spins around the fish to create the effect that the water is moving along with them.</p>
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
                            <h3>What is Atlantis?</h3>
                            <p>Atlantis is a mythical city that has never been found.</p>
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