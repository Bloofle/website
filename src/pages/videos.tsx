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
                    <p className="justified">Have fun binging my videos! They are interesting so you won't get bored. I have used different apps to create them. Some were made using iMovie, and some were made using DaVinci Resolve. I am still learning, but I feel it is something that I love to do.</p>
                    <hr className="featurette-divider" />
                </Col>
            </Row>
            <Creation title="Bloofle Overture" video="https://www.youtube.com/embed/EmAK6SdioI4" description="An introduction of all my works in Recroom. Mount Fuji View, Gate To Atlantis and Cliffside Serenity are shown in this video." link="" />
            <Creation title="Minecraft" video="https://www.youtube.com/embed/_-TltwqkOI8" description="An introduction of my most interesting works in Minecraft." link="" />
            <Creation title="Night Falls 360" video="https://www.youtube.com/embed/oq8G7A09PHs" description="This is my latest creation. It includes an entire playlist of music and wonderful scenery. Luckily, I made a 360 Video of it." link="" />
            <Creation title="Queen Live Aid 1985" video="https://www.youtube.com/embed/6nlRiIcjZ-c" description="Not many people know this, but I am obsessed with Queen. This year I had the opportunity to help in a show called Live Aid. " link="" />
            <Creation title="MountFujiView Trailer" video="https://www.youtube.com/embed/KvYY7NpeRZI" description="This is the trailer to Mount Fuji View. I had a friend create this trailer for me and I love it. " link="" />
            <Creation title="Creating A Plant Out Of Random Shapes" video="https://www.youtube.com/embed/RTSjP9qclvw" description="Somehow, I managed to make a nice looking plant out of a random shape. This video demonstrates how I did it." link="" />
            <Creation title="Fortnite" video="https://www.youtube.com/embed/awkp1wdYSGE" description="An introduction to my favourite place in my Fortnite collection." link="" />
            <Creation title="Creating A Boat In RecRoom" video="https://www.youtube.com/embed/3lEwSGzwzQg" description="Creating a boat in Recroom, this is how I did it." link="" />
            <Row>&nbsp;</Row>
        </Container >
    );
}