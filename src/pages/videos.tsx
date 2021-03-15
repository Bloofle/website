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
                    <p>Have fun binging my videos! They are interesting so you won't get bored.</p>
                </Col>
            </Row>
            <Creation title="Bloofle Overture" video="https://www.youtube.com/watch?v=EmAK6SdioI4&t=8s" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Minecraft" video="https://www.youtube.com/watch?v=_-TltwqkOI8" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="AJR Experience" video="https://www.youtube.com/watch?v=GEIMZemmEWI" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Mount Fuji View 360" video="https://www.youtube.com/watch?v=oq8G7A09PHs&t=22s" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="Queen Live Aid 1985" video="https://youtu.be/6nlRiIcjZ-c" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Creation title="MountFujiView Trailer" video="https://www.youtube.com/watch?v=KvYY7NpeRZI&t=3s" description="This room was created during Covid-19 lockdown in July-August 2020. I was hoping to visit Japan, but my plans got ruined. So I've decided to make a virtual one" link="" />
            <Row>&nbsp;</Row>
        </Container >
    );
}