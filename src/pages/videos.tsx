import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import atlantis from '../media/atlantis.jpg';
import Creation from '../components/creation';

export const Videos = () => {
    useEffect(() => { document.title = 'Bloofle: Videos'; }, []);

    return (
        <Container className="marketing">
            <h1 className="header_section">My Videos</h1>
            <Row>
                <Col>
                    <p className="justified">Have fun binging my videos! They are interesting so you won't get bored. I have used different apps to create them. Some were made using iMovie, and some were made using DaVinci Resolve. I am still learning</p>
                    <hr className="featurette-divider" />
                </Col>
            </Row>
            <Creation title="Bloofle Overture" video="https://www.youtube.com/embed/EmAK6SdioI4" description="An introduction of all my works in Recroom. Mount Fuji View, Gate To Atlantis and Cliffside Serenity are shown in this video." link="" />
            <Creation title="Minecraft" video="https://www.youtube.com/embed/_-TltwqkOI8" description="An introduction of my most interesting works in Minecraft." link="" />
            <Creation title="Night Falls 360" video="https://www.youtube.com/embed/oq8G7A09PHs" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Queen Live Aid 1985" video="https://www.youtube.com/embed/6nlRiIcjZ-c" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="MountFujiView Trailer" video="https://www.youtube.com/embed/KvYY7NpeRZI" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Row>&nbsp;</Row>
        </Container >
    );
}