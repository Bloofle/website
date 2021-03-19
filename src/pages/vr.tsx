import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Creation from '../components/creation';
import mfvgroup from '../media/recroom/mfvgroup.jpg';
import themodernsuite from '../media/recroom/themodernsuite.jpg';
import atlantissideviewq from '../media/recroom/atlantissideviewq.jpg';
import serenitymoon from '../media/recroom/serenitymoon.jpg';

export const VR = () => {
    useEffect(() => { document.title = 'Bloofle: VR Creations'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">My VR Creations</h1>
            <Row>
                <Col><p>These are some of the locations I have created in VR</p>
                </Col>
            </Row>
            <Creation title="Mount Fuji View" image={mfvgroup} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Cliffside Serentity" image={serenitymoon} description="Cliffside Serenity is a cozy hangout area that was made for people to enjoy the vast expanse of Recroom. If you had a bad day this would be the perfect escape for you." link="" />
            <Creation title="Gate To Atlantis" image={atlantissideviewq} description="Gate to Atlantis is a fictional remake of the iconic Lost City of Atlantis. How Atlantis actually looks is a mystery, so I predicted how it looks like." link="" />
            <Creation title="Night Falls" image={mfvgroup} description="Night Falls is my latest creation. It is a comfortable picnic at a view looking upon a range of beautiful mountains. Fun Fact! I wrote this before the room was released." link="" />
            <Creation title="The Modern Suite" image={themodernsuite} description="The Modern Suite is a lounge which was made for you to sit down, relax and talk to your friends. You can also have a swim in the pool if you are bored." link="" />
        </Container>
    );
}