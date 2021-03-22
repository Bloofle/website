import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../../components/videoplayer';
import stageview from '../../media/wires/ajr_stageview.png';
import backstageview from '../../media/wires/ajrbackgroundview.png';
import wiresfrontview from '../../media/wires/ajrwiresfrontview.png';
import wirefullview from '../../media/wires/wirefullview.png';
import skybackground from '../../media/wires/skybackground.png';
import bot from '../../media/bot.png';

export const AJR = () => {
    useEffect(() => { document.title = 'Bloofle: Programming'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">My Coding: Discord Bot</h1>
            <Row>
                <Col>
                    <p>I have started writing a simple Bot for Discord chat, which reacts to user commands. I wanted to impress my friends.
                     I have followed the tutorials online, and I have fully set this up on my own. The only thing my Dad helped me was to plug in the font that I like and use the JavaScript library to manipulate the images.
                       The source code can be found <a href="https://repl.it/@georgemolchanyu/Harvey-the-BEE#index.js" target="_blank">here</a>.
                    </p>
                    <img src={bot} />
                    <br />
                    &nbsp;
                </Col>
            </Row>
            <h1 className="header_section">My Coding: VR interactive show</h1>
            <Row>
                <Col>
                    <p className="justified">Me and my friends are fans of the band AJR. So we have created a virtual room where we can perform like this band does. 
                    RecRoom allows to create multiple types of triggers that turn on/off objects, light sources, sound sources, etc. Plus you can setup the intencity and frequency of triggers.
                    I have programmed some effects, like strobbing lights, fog machine, animated lights, etc. And I have also created a control panel which I use during the live show to turn on
                    or off the effects like on real stage. All the wires which you see on these pictures are virtual connections between objects and controllers. There's a lot, indeed.</p>
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
                            <p>These are the circuits I use to control various lighting effects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={wiresfrontview} alt="Effects" />
                        <Carousel.Caption>
                            <h3>The main effects</h3>
                            <p>These effects are responsible for sound and visual effects</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={skybackground} alt="Effects" />
                        <Carousel.Caption>
                            <h3>Physical Effects</h3>
                            <p>These include different sign variations, stage effects, ropes, etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={wirefullview} alt="Effects" />
                        <Carousel.Caption>
                            <h3>The full effect view</h3>
                            <p>These are all of the buttons that make the show possible.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
            </Row>
            <Row>
                <Col><p>Watch the video below for short intro.
                </p>
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