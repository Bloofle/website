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
            <Creation title="Bubbles" image={bubbles} description="These are bubbles that were created using different layers and blurring out different parts of shading." />
            <Creation title="Mandala" image={mandalaart} description="While I was in lockdown, I created this mandala art for a school art assignment." />
            <Creation title="Opera Theatre" image={operatheatre} description="This is the Sydney Opera Theatre." />
            <Creation title="Pokemon" image={pokemon} description="I made this artwork by drawing over an image and making it rainbow." />
            <Creation title="Space Logo Design" image={spacelogo} description="This was a logo for a space game called Project Astro. I never started on the game though." />
            <Creation title="Theatre Logo Design" image={theaterlogo} description="This is a logo concept for a luxurious theatre." />
            <Creation title="Strange Artwork" image={weirdartwork} description="This was my first ever artwork using procreate. When I saw it at First, I thought it looked slightly like squidward." />
           
        </Container>
    );
}