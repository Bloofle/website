import React from 'react';
import atlantis from '../media/recroom/atlantis.jpg';
import atlantis_view from '../media/recroom/atlantis_view.jpg';
import serenity from '../media/recroom/serenity.jpg';
import atlantis_scene from '../media/recroom/atlantis_scene.jpg';
import minecraftImage from '../media/minecraft/create2.jpg';
import mfvgroup from '../media/recroom/mfvgroup.jpg';
import fortniteImage from '../media/fortnite/trigger3.jpg';
import createMemories from '../media/recroom/creatememories.jpg';
import mfv from '../media/recroom/MFV.jpg';
import bonfire from '../media/recroom/bonfire.jpg';
import FeatureBox from '../components/featureBox';
import Featurette from '../components/featurette';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

export const Home = () => {

    useEffect(() => { document.title = 'Bloofle Portfolio Page'; }, []);

    return (
        <>
            <br />
            <Container className="container-lg nopadding">
                <Row className="nomargin">
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={atlantis} alt="Atlantis" />
                            <Carousel.Caption>
                                <h3>Imagination is key</h3>
                                <p className="centered">Whether it's from taking photos or taking in the view, enjoy it while you can.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={createMemories} alt="Mount Fuji View" />
                            <Carousel.Caption>
                                <h3>Create memories</h3>
                                <p>These rooms are best for great time with your special partner, scenery takes emotion to the next level. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={bonfire} alt="Bonfire" />
                            <Carousel.Caption>
                                <h3>Take a seat</h3>
                                <p>Relax, sit down and get comfortable.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
            <Container className="marketing">
                <Row>
                    <Col>
                        <h2 className="header_section">My Virtual Reality Rooms</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="justified lead">Over the past year I was really busy creating different VR rooms on the RecRoom platform. I have designed and programmed all of them from scratch,
                        creating every detail, every piece of landscape, every leaf and every tree by hand. I have programmed interactive objects, sounds and music. I've used particles to generate
                         such effects as fireflies, falling leaves and petals, smoke and haze. </p>
                        <p className="justified lead">You can create truly wonderful things in virtual reality, and it is so much fun to play together with friends after you've created them.</p>
                        <p className="justified lead">Below you can find the links to three of my most advanced creations. If you don't have an access to RecRoom or VR, check out the video section of the website
                         for the pre-recorded trailers and 360° videos</p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <FeatureBox
                        title="Gate to Atlantis"
                        description="Gate to Atlantis is an epic experience of the mystical Lost City of Atlantis, Poseidon would be proud."
                        image={atlantis_view}
                        link="https://rec.net/room/GateToAtlantis"
                    />
                    <FeatureBox
                        title="Mount Fuji View"
                        description="Gaze at the view, Huddle around the bonfire, Chat with your friends and get an incredible profile picture."
                        image={mfv}
                        link="https://rec.net/room/MountFujiView"
                    />
                    <FeatureBox
                        title="Cliffside Serenity"
                        description="The perfect hangout for all hangout lovers! This experience will take you on a trip of beauty, amazement and relaxation!"
                        image={serenity}
                        link="https://rec.net/room/CliffsideSerenity"
                    />
                    <br />
                    &nbsp;
                </Row>
                <Row>
                    <Col>
                        <h3 className="header_section_smaller">My other creations</h3>
                    </Col>
                </Row>
                <Featurette title='Minecraft' subtitle="Circuits and minigames" description="Minecraft is an excellent game for developing creative skills, and I've started playing it since I was five. I've learned that it gives you an endless amount of possibilities to create your own games, program objects, create traps, fun rides, and something that is non-static. Click the link below to find out more." image={minecraftImage} textOnTheLeft={true} link="videos" />
                <Featurette title='Fortnite' subtitle="From game to creation" description="I liked to play Fortnite some time ago, but bashing your friends with all sorts of weapons is not something that I like, and it become boring. Fortunately, they've added a Creator mode, which I used to experiment with minigames and programming simple interactive objects. I have really liked to sequence music using Fortnite objects, too pity that they are no longer properly supported in the newer Fortnite versions. Click on the link below to see a few examples." image={fortniteImage} textOnTheLeft={false} link="videos" />
                <Featurette title='ProCreate' subtitle="Graphic Design" description="I explore Graphics Design using ProCreate software. I use it to draw images for school and just for fun. Click below for the gallery of my works." image={atlantis_scene} textOnTheLeft={true} link="drawings" />
                <hr className="featurette-divider" />
            </Container>
        </>
    );
}