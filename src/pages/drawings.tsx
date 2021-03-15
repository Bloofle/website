import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Creation from '../components/creation';
import mfvgroup from '../media/recroom/mfvgroup.jpg';
import bubbles from '../media/procreate/bubbles.png';
import mandalaart from '../media/procreate/mandalaart.png';
import operatheatre from '../media/procreate/operatheatre.png';
import pokemon from '../media/procreate/pokemon.png';
import spacelogo from '../media/procreate/spacelogo.png';
import theaterlogo from '../media/procreate/theaterlogo.png';
import weirdartwork from '../media/procreate/weirdartwork.png';

export const Drawings = () => {
    useEffect(() => { document.title = 'Bloofle: Drawings'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">My Drawings</h1>
            <Row>
                <Col><p>Yes I draw too! Here are some of my artworks. Pretty cool huh?</p>
                </Col>
            </Row>
            <Creation title="Mount Fuji View" image={bubbles} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={mandalaart} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={operatheatre} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={pokemon} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={spacelogo} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={theaterlogo} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
            <Creation title="Mount Fuji View" image={weirdartwork} description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" />
           
        </Container>
    );
}