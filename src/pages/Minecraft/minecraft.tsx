import React from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../../components/videoplayer';
import city1 from '../../media/minecraft/city1.jpg';
import create from '../../media/minecraft/create.jpg';
import create2 from '../../media/minecraft/create2.jpg';
import dancetime from '../../media/minecraft/dancetime.jpg';
import game1 from '../../media/minecraft/game1.jpg';
import house1 from '../../media/minecraft/house1.jpg';
import patrick from '../../media/minecraft/patrick.jpg';

export const Minecraft = () => {
    useEffect(() => { document.title = 'Bloofle: Minecraft'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">Minecraft Minigames and Interactive Objects</h1>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={create2} alt="My City" />
                        <Carousel.Caption>
                            <h3>Minecraft City of entertainment</h3>
                            <p className="centered">I have created a whole city with different attractions, artworks and mini games</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={city1} alt="City" />
                        <Carousel.Caption>
                            <h3>Minecraft City Streets</h3>
                            <p>This is how the city streets look</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={dancetime} alt="Dancing Statue" />
                        <Carousel.Caption>
                            <h3>Dancing Statue</h3>
                            <p>I have programmed this statue to continuously dance (see video below)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={game1} alt="Mini Game" />
                        <Carousel.Caption>
                            <h3>Minigame</h3>
                            <p>Just a minigame to play with my friends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={house1} alt="My house" />
                        <Carousel.Caption>
                            <h3>My house interiors</h3>
                            <p>I've built a house to impress my friends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={patrick} alt="Patrick the startfish" />
                        <Carousel.Caption>
                            <h3>Patrick</h3>
                            <p>Just a statue of Patrick the Starfish</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col>
                    <br />
                    <p className="justified">Minecraft was my starting point to programming. After spending a couple of months of mining and digging, I've found the way to create programmable circuits.
                    I did some experiments, and created things like dancing figures, rollecoasters, traps and key locks</p>
                    <p className="justified">The video below shows how it all works</p>
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