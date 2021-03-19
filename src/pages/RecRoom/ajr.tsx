import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../../components/videoplayer';
import stageview from '../../media/wires/ajr_stageview.png';
import backstageview from '../../media/wires/ajrbackgroundview.png';
import wiresfrontview from '../../media/wires/ajrwiresfrontview.png';
import wirefullview from '../../media/wires/wirefullview.png';
import skybackground from '../../media/wires/skybackground.png';

export const AJR = () => {
    useEffect(() => { document.title = 'Bloofle: Live Show'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">AJR Live Show</h1>
            <Row>
                <Col>
                    <p className="justified">Me and my friends are fans of the band AJR. So we have created a virtual room where we can perform like this band does. 
                    RecRoom allows to create multiple types of triggers that turn on/off objects, light sources, sound sources, etc. Plus you can setup the intencity and frequency of triggers.
                    I have programmed some effects, like strobbing lights, fog machine, animated lights, etc. And I have also created a control panel which I use during the live show to turn on
                    or off the effects like on real stage.</p>
                    <hr className="featurette-divider" />
                </Col>
            </Row>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={stageview} alt="Stage View" />
                        <Carousel.Caption>
                            <h3>Stage View</h3>
                            <p className="centered">This is how the stage looks</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={backstageview} alt="Backstage" />
                        <Carousel.Caption>
                            <h3>Backstage setup</h3>
                            <p>These are the circuits I use to control various objects</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={wiresfrontview} alt="Effects" />
                        <Carousel.Caption>
                            <h3>Effects used for room</h3>
                            <p>These effects are responsible for creating sounds in Mountain Fuji View room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={skybackground} alt="Effects" />
                        <Carousel.Caption>
                            <h3>Effects used for room</h3>
                            <p>These effects are responsible for creating sounds in Mountain Fuji View room.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={wirefullview} alt="Effects" />
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
            <Row>
                <Col>
                    <VideoPlayer videoUrl="https://www.youtube.com/embed/GEIMZemmEWI" />
                    <br />
                </Col>
            </Row>
        </Container>
    );
}