import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Creation from '../components/creation';
import mfvgroup from '../media/recroom/mfvgroup.jpg';

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
            <Creation title="Mount Fuji View" image={mfvgroup} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Mount Fuji View" image={mfvgroup} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Mount Fuji View" image={mfvgroup} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Mount Fuji View" image={mfvgroup} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
        </Container>
    );
}