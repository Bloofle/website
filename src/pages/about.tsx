import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import bonfire from '../media/recroom/bonfire.jpg';
import city1 from '../media/minecraft/city1.jpg';
import trigger4 from '../media/fortnite/trigger4.jpg';
import ReactPlayer from 'react-player';
import mfvgroup from '../media/recroom/mfvgroup.jpg';
import Timeline, { TimelineEvent, TimelineEventClickHandler } from 'react-image-timeline';
require('../timeline.css');

export const About = () => {
    useEffect(() => { document.title = 'Bloofle: About me'; }, []);
    const history = useHistory();

    const eventMinecraft: TimelineEvent = {
        date: new Date(2014, 1, 12),
        imageUrl: city1,
        text: "I have always wanted to do 3D art in some way, so I started my first creations in Minecraft. One thing that really interested me was the programming method in the game and i remember watching videos over and over again just so i could get the contraption correctly set up for use. These thrilling escapades felt like I was doing something new, something which was never done before. I felt like the most talented kid in the universe. There was no limit... but I started to feel like there was a limit for me. Contraptions didn't work, circuits didn't function. I was at a dead end which I couldn't break through.",
        title: "Minecraft: The Beginning",
        buttonText: "View more...",
        onClick: () => history.push('/minecraft'),
    }

    const eventFortnite: TimelineEvent = {
        date: new Date(2017, 8, 24),
        imageUrl: trigger4,
        text: "Sometime in 2017 I thought to myself: \"I am tired of breaking blocks and making elevators, i want a change.\" So I changed to the best option at the time, Fortnite. Fortnite was a very addicting game but I still needed to find a way to do amazing things. The first project me and my friends worked on was a huge pyramid that covered half of the game, ofcourse this had to be done privately but i enjoyed it. 2 years go by, nothing really changed until the big 'spark' It was called creative mode. Creative mode was a way to make your own projects automatically. Presets, cloning, vehicles the list feels like it goes on forever, but the main thing I'd like to point out is the trigger system. Triggers only had one basic objective which was to turn on and off things. Me and my friends made an entire protection system which could only be accessed with a passcode lock. inside of the base there was zombie spawners nuclear weapons, weapon spawners and barriers. For the creative side of things, we would build race tracks and make houses. This was our paradise.",
        title: "Fortnite: From Arena To Artworks",
        buttonText: "View more...",
        onClick: () => history.push('/fortnite'),
    }

    const eventRecroom: TimelineEvent = {
        date: new Date(2019, 6, 12),
        imageUrl: mfvgroup,
        text: "December 6th 2019 'The Big change' This was the day that i first met the most glorious device in my artistic history, it was called... 'RecRoom' At first, I had no idea what this was. It felt like a big mess of cartoons to me and i had doubt about the game untill my friend Cody showed me a tool that was called the 'Maker Pen' \"What is this?\" I ask \"This is how you create, George!\" I think I had a vision. Was this the answer I was seeking for all along? I hope it was. The first thing I did is watch others build, I analysed their techniques and everything was moving smoothly. I had ideas which would bring me to my first ever creation: CGBar. CGBar was my first ever accompishment in Recroom and I made it with Cody. We called it CGBar because me and his name combined make CG. We had bartenders, drinks, members and an entire playlist of music that could be activated by pressing a secret button. We had buttons for all sorts of things, one button would turn on the spinning lights which went around the disco floor and rainbow lights which flash violently. Fast forward a few months I decided to make a new project, this was called The Modern Suite. The process gave me a thorough understanding of furniture, architecture, kitchens, rooms, pools and more things relating to houses. The pool was the trickiest part of the entire room because it needed a hot tub. I couldn't toggled machines yet so I got help from a friend. He told me about how you can make pistons move up and down using a system of circuitry called states and state machines. They are magical, there is almost nothing that you can't do without them. So we made the system and finally published the suite. I was stuck again. Nothing to do, nothing to build. Until an announcement was made. 'GETAWAY CONTEST! ENTER NOW!' I thought, 'What's the getaway contest?' so I went to the website with all of the information about the getaway contest and it was a building contest. 'Sign me up!' I thought to myself in uncertainty. I needed an idea and I was thinking of making another house but I quickly stopped doing it. I needed to think of something but I had no ideas. Until I realised that the theme was for geteway and since no one could go anywhere... I started making Mount Fuji View. This was something very new for me and I started by doing the thing I know how to do best, observe.  ",
        title: "RecRoom: A New Era",
        buttonText: "View more...",
        onClick: () => history.push('/vr'),
    }

    const eventNow: TimelineEvent = {
        date: new Date(2020, 3, 10),
        imageUrl: bonfire,
        text: "In 2020 I have started creating videos and artwork, mostly for my school projects and fun",
        title: "Video, Graphics",
        buttonText: "View more...",
        onClick: () => history.push('/videos'),
    }

    const events: TimelineEvent[] = [eventMinecraft, eventFortnite, eventRecroom, eventNow];

    return (
        <Container className="marketing">
            <h1 className="header_section">About me</h1>
            <Row>
                <Col><h2 className="featurette-heading">Hi, I'm George.</h2>
                    <br />
                </Col>
            </Row>
            <Row>
                <div className="col-md-5 order-md-1">

                    <p className="justified lead">I am a VR artist and programmer (beginner) and I have a passion for technology and computer science.</p>
                    <p className="justified lead">I aspire in things like video editing, art in virtual reality, coding, video production, music, art and more.</p>
                    <p className="justified lead">Bloofle is just a stage name, you can call me George. I've been doing these things for a while and have wanted to proceed in them by getting proper education about technology and it's endless capabilities. I am writing this in my room I am this serious.</p>

                </div>
                <div className="col-md-7 order-md-2">
                    <ReactPlayer className="featurette-image img-fluid mx-auto" url="https://www.youtube.com/watch?v=EmAK6SdioI4&t=8s" />
                </div>
            </Row>
            <Row>
                <Col>
                    <p className="justified muted">I have created this site together with my Dad, as I wanted to learn how the websites are made, so we chose a 'real-world' path:
                    we are using source control, continuous integration and continuous deployment, cloud hosting, automated testing and other techy things. I am still learning, but it is already looking cool.
                    I think this is something I want to do in future.</p>
                </Col>
            </Row>
            <h1 className="header_section">My progress path</h1>
            <Row>
                <Timeline events={events} />
            </Row>
        </Container>
    );
}