import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Featurette from '../components/featurette';
import bonfire from '../media/bonfire.jpg';

export const About = () => {
    useEffect(() => { document.title = 'Bloofle: About me'; }, []);

    return (
        <Container className="marketing">
            <h1>About me</h1>
            <Featurette title="Who am I?" subtitle="I am George" description="I am a VR artist and programmer (beginner)" image={bonfire} />
            <hr className="featurette-divider" />
        </Container>
    );
}