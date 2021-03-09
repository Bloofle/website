import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Featurette from '../components/featurette';
import bonfire from '../media/recroom/bonfire.jpg';
import city1 from '../media/minecraft/city1.jpg';
import trigger4 from '../media/fortnite/trigger4.jpg';
import mfvgroup from '../media/recroom/mfvgroup.jpg';
import Timeline, { TimelineEvent } from 'react-image-timeline';
require('../timeline.css');

export const About = () => {
    useEffect(() => { document.title = 'Bloofle: About me'; }, []);

    const eventMinecraft: TimelineEvent = {
        date: new Date(2014, 1, 12),
        imageUrl: city1,
        text: "I have always wanted to do 3D art in some way, so I started my first creations in Minecraft. One thing that really interested me was the programming method in the game and i remember watching videos over and over again just so i could get the contraption correctly set up for use.",
        title: "Minecraft: The Beginning",
        buttonText: "View artworks",
    }

    const eventFortnite: TimelineEvent = {
        date: new Date(2017, 8, 24),
        imageUrl: trigger4,
        text: "Sometime in 2017 I thought to myself: \"I am tired of breaking blocks and making elevators, i want a change.\" So I changed to the best option at the time, Fortnite. Fortnite was a very addicting game but I still needed to find a way to do amazing things. The first project me and my friends worked on was a huge pyramid that covered half of the game, ofcourse this had to be done privately but i enjoyed it. 2 years go by, nothing really changed until the big 'spark' It was called creative mode. Creative mode was a way to make your own projects automatically. Presets, cloning, vehicles the list feels like it goes on forever, but the main thing I'd like to point out is the trigger system. Triggers only had one basic objective which was to turn on and off things. Me and my friends made an entire protection system which could only be accessed with a passcode lock. inside of the base there was zombie spawners nuclear weapons, weapon spawners and barriers. For the creative side of things, we would build race tracks and make houses. This was our paradise.",
        title: "Fortnite: From Arena To Artworks",
        buttonText: "View artworks",
    }

    const eventRecroom: TimelineEvent = {
        date: new Date(2019, 6, 12),
        imageUrl: mfvgroup,
        text: "December 6th 2019 'The Big change' This was the day that i first met the most glorious device in my artistic history, it was called... 'RecRoom' At first, I had no idea what this was. It felt like a big mess of cartoons to me and i had doubt about the game untill my friend Cody showed me a tool that was called the 'Maker Pen' \"What is this?\" I ask \"This is how you create, George!\" I think I had an epithany at that moment.",
        title: "RecRoom: A New Era",
        buttonText: "View artworks",
    }

    const eventNow: TimelineEvent = {
        date: new Date(2020, 3, 10),
        imageUrl: bonfire,
        text: "In 2020 I have started creating videos and artwork, mostly for my school projects and fun",
        title: "Video, Graphics",
        buttonText: "View artworks",
    }

    const events: TimelineEvent[] = [eventMinecraft, eventFortnite, eventRecroom, eventNow];

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
                </div>
                <div className="col-md-5 order-md-2">
                    <img className="featurette-image img-fluid mx-auto" src={bonfire} alt="Bloofle" />
                </div>
            </Row>
            <Row>
                <Timeline events={events} />
            </Row>
        </Container>
    );
}