import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import fallingleaves from '../../media/wires/fallingleaves.jpg';
import fireflies from '../../media/wires/fireflytoggle.jpg';
import mfveffects from '../../media/wires/mfveffects.jpg';

export const CliffSideSerenity = () => {
    useEffect(() => { document.title = 'Bloofle: CliffSide Serenity in details'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Cliffside Serenity Gallery</h1>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={fallingleaves} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Falling Leaves</h3>
                            <p className="centered">Particles are used to imitate falling leaves</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={fireflies} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Circuit to toggle fireflies</h3>
                            <p>This small circuit toggles the fireflies to fly around you when you enter the room</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={mfveffects} alt="Effects" />
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