import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../../components/videoplayer';
import house from '../../media/fortnite/house.jpg';
import housetwo from '../../media/fortnite/housetwo.jpg';
import trigger from '../../media/fortnite/trigger.jpg';
import trigger2 from '../../media/fortnite/trigger2.jpg';
import trigger3 from '../../media/fortnite/trigger3.jpg';
import trigger4 from '../../media/fortnite/trigger4.jpg';
import water from '../../media/fortnite/water2.jpg';
import music from '../../media/fortnite/fortnitemusic.jpg';

export const Fortnite = () => {
    useEffect(() => { document.title = 'Bloofle: Fortnite'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Fortnite Minigames and Interactive Objects</h1>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={house} alt="My House" />
                        <Carousel.Caption>
                            <h3>House With Digital Lock</h3>
                            <p className="centered">I have created a digital lock to protect my house in Fortnite. It uses triggers to program access key imitation</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={housetwo} alt="My house" />
                        <Carousel.Caption>
                            <h3>House With Digital Lock</h3>
                            <p>I was bored just to run and shoot so tried to create</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trigger} alt="Trigger" />
                        <Carousel.Caption>
                            <h3>Trigger</h3>
                            <p>This is how programmable trigger looks</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trigger2} alt="Mini Game" />
                        <Carousel.Caption>
                            <h3>Minigame</h3>
                            <p>Just a minigame to play with my friends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trigger3} alt="My house" />
                        <Carousel.Caption>
                            <h3>My house interiors</h3>
                            <p>I've built a house to impress my friends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={trigger4} alt="Patrick the startfish" />
                        <Carousel.Caption>
                            <h3>Patrick</h3>
                            <p>Just a statue of Patrick the Starfish</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={water} alt="Watefall" />
                        <Carousel.Caption>
                            <h3>The Waterfall I've created</h3>
                            <p>Just a piece of some 3D art</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={music} alt="Musical instrument" />
                        <Carousel.Caption>
                            <h3>Xylophone</h3>
                            <p>A xylophone for Fortnite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col>
                    <br />
                    <p className="justified">I have started programming in Fortnite after the creators mode was enabled. Too pity that the latest update seems to have broken all of them.</p>
                    <p className="justified">The video below shows how it all worked</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <VideoPlayer videoUrl="https://www.youtube.com/embed/_-TltwqkOI8" />
                    <br />
                </Col>
            </Row>
        </Container>
    );
}