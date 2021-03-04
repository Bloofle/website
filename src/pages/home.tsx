import React from 'react';
import atlantis from '../media/atlantis.jpg';
import atlantis_view from '../media/atlantis_view.jpg';
import serenity from '../media/serenity.jpg';
import createMemories from '../media/creatememories.jpg';
import mfv from '../media/MFV.jpg';
import bonfire from '../media/bonfire.jpg';
import FeatureBox from '../components/featureBox';
import Featurette from '../components/featurette';
import { Carousel, Container } from 'react-bootstrap';
import { useEffect } from 'react';

export const Home = () => {
    
    useEffect(() => { document.title = 'Bloofle Portfolio Page';  }, []);

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={atlantis} alt="Atlantis" />
                    <Carousel.Caption>
                        <h3>Imagination is key</h3>
                        <p>Whether it's from taking photos or taking in the view, enjoy it while you can.</p>
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
            <br />
            <Container className="container marketing">
                <div className="row">
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
                </div>
                <Featurette title='My achievements' subtitle="It'll blow your mind" description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." image={atlantis} textOnTheLeft={true} />
                <Featurette title='My achievements' subtitle="It'll blow your mind" description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." image={bonfire} textOnTheLeft={false} />
                <Featurette title='My achievements' subtitle="It'll blow your mind" description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." image={atlantis} textOnTheLeft={true} />
                <hr className="featurette-divider" />
            </Container>
        </>
    );
}