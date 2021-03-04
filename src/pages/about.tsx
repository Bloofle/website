import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Featurette from '../components/featurette';
import bonfire from '../media/bonfire.jpg';

export const About = () => {
    useEffect(() => { document.title = 'Bloofle: About me'; }, []);

    return (
        <Container className="marketing">
            <h1>About me</h1>
            <Row>
                <div className="col-md-7 order-md-1">
                    <h2 className="featurette-heading">Hi, I'm George.</h2>
                    <span className="text-muted">Welcome to my portfolio page</span>
                    <p className="justified">I am a VR artist and programmer (beginner) and I have a passion for technology and computer science.</p>
                    <p className="justified">I aspire in things like video editing, art in virtual reality, coding, video production, music, art and more.</p>
                    <p className="justified">Bloofle is just a stage name, you can call me George. I've been doing these things for a while and have wanted to proceed in them by getting proper education about technology and it's endless capabilities. I am writing this in my room I am this serious. </p>
                    <p className="justified">I have always wanted to do 3D art in some way, so I started in minecraft. One thing that really interested me was the programming method in the game and i remember watching videos over and over again just so i could get the contraption correctly set up for use.  </p>
                    <p className="justified">Sometime in 2017 I thought to myself: "I am tired of breaking blocks and making elevators, i want a change." So I changed to the best option at the time, Fortnite. Fortnite was a very addicting game but I still needed to find a way to do amazing things. The first project me and my friends worked on was a huge pyramid that covered half of the game, ofcourse this had to be done privately but i enjoyed it. 2 years go by, nothing really changed until the big 'spark' It was called creative mode. Creative mode was a way to make your own projects automatically. Presets, cloning, vehicles the list feels like it goes on forever, but the main thing I'd like to point out is the trigger system. Triggers only had one basic objective which was to turn on and off things. Me and my friends made an entire protection system which could only be accessed with a passcode lock. inside of the base there was zombie spawners nuclear weapons, weapon spawners and barriers. For the creative side of things, we would build race tracks and make houses. This was our paradise.   </p>
                    <p className="justified">December 6th 2019 'The Big change' This was the day that i first met the most glorious device in my artistic history, it was called... 'RecRoom' At first, I had no idea what this was. It felt like a big mess of cartoons to me and i had doubt about the game untill my friend Cody showed me a tool that was called the 'Maker Pen' "What is this?" I ask "This is how you create George!" I think I had an epithany at that moment.  </p>
                </div>
                <div className="col-md-5 order-md-2">
                    <img className="featurette-image img-fluid mx-auto" src={bonfire} alt="Bloofle" />
                </div>
            </Row>
            <hr className="featurette-divider" />
            <Row>
                
                <Col>Bloofle</Col>
                <Col>Portfolio</Col>
                <Col>Page</Col>
            </Row>
        </Container>
    );
}