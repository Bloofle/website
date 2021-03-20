import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import lights from '../../media/wires/lights.jpg';
import randomAudio from '../../media/wires/randomaudiofireflysfx.jpg';
import musicSystem from '../../media/wires/musicsystem.jpg';
import woodpeckers from '../../media/wires/randomwoodpeckers.jpg';

export const CliffSideSerenity = () => {
    useEffect(() => { document.title = 'Bloofle: CliffSide Serenity in details'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Cliffside Serenity Gallery</h1>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={lights} alt="Falling Leaves" />
                        <Carousel.Caption>
                            <h3>Slightly Flickering Lights</h3>
                            <p className="centered">A randomized light brightness gadget that constantly generates a number from 20 - 35</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={randomAudio} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>Random Audio Loudness and fireflies</h3>
                            <p>This circuit creates more depth in the room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={musicSystem} alt="Fireflies" />
                        <Carousel.Caption>
                            <h3>The Music System</h3>
                            <p>This is what makes up all of the music in the room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={woodpeckers} alt="Effects" />
                        <Carousel.Caption>
                            <h3>Randomized Woodpecker Sound Effects</h3>
                            <p>These sounds are played completely randomly throughout the experience.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col><p>This room is filled with in depth sounds. They help to make the room much more realistic.</p>
                </Col>
            </Row>
        </Container>
    );
}