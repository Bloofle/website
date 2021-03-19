import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { type } from 'node:os';

export const Secret = () => {
    useEffect(() => { document.title = 'Bloofle: Secret Page'; }, []);

    let [responseData, setResponseData] = React.useState('');
    let [userName, setUserName] = React.useState('');
    let [passCode, setPassCode] = React.useState('');

    const fetchData = () => {
        axios.get(`https://security.bloofle.net/api/AccessChecker?name=${userName}&accessCode=${passCode}`)
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                setResponseData("Ooh, wrong one!")
            })
    }

    return (
        <Container className="marketing">
            <h1 className="header_section">Secret Page</h1>
            <Row>
                <Col>
                    <p className="justified">Here is a secret part of the website. We need your <s>clothes, your boots and motorcycle</s> name and secret code, please.</p>
                    <hr className="featurette-divider" />
                </Col>
            </Row>
            <Row>
                <Col>Your Name: <input value={userName} onChange={e => setUserName(e.target.value)} /></Col>
                <Col>Your Code: <input value={passCode} onChange={e => setPassCode(e.target.value)} type="password" /></Col>
                <Col><button onClick={() => fetchData()} >What's the secret?</button></Col>
                <hr className="featurette-divider" />
            </Row>
            <Row>
                <Col>
                    <small>{responseData}</small>
                </Col>
            </Row>
        </Container>
    );
}