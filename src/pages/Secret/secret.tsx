import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

interface apiResponse {
    name?: string,
    count: number,
    imageUrlPrefix: string,
    error?: string,
}

export const Secret = () => {
    useEffect(() => { document.title = 'Bloofle: Secret Page'; }, []);

    let [responseData, setResponseData] = React.useState<apiResponse>();
    let [userName, setUserName] = React.useState('');
    let [passCode, setPassCode] = React.useState('');

    const renderAwardsGallery: any = () => {
        if (responseData && !responseData.error) {
            var i: number = 0;
            var imageUrls: string[] = new Array<string>();
            imageUrls[0] = `${responseData.imageUrlPrefix}.png?sv=2020-02-10&ss=bf&srt=sco&sp=rx&se=2029-03-20T18:25:42Z&st=2021-03-20T10:25:42Z&spr=https&sig=I0clHxnLPydhWmUUaVhsg6giN7TCthUTQjZ91HH6pP8%3D`;
            for (i = 1; i < responseData.count; i++) {
                imageUrls[i] = `${responseData.imageUrlPrefix}_${i}.png?sv=2020-02-10&ss=bf&srt=sco&sp=rx&se=2029-03-20T18:25:42Z&st=2021-03-20T10:25:42Z&spr=https&sig=I0clHxnLPydhWmUUaVhsg6giN7TCthUTQjZ91HH6pP8%3D`;
            }
            return (
                <>
                    <h2>Thanks, {responseData.name}, here is the hidden section - my awards!</h2>
                    <Row>
                        <Carousel>
                            {imageUrls.map(url => (<Carousel.Item key={url}>
                                <img className="d-block w-100" src={url} alt="Award" />
                            </Carousel.Item>))}
                        </Carousel>
                    </Row>
                </>
            )
        }
        else if (responseData && responseData.error)
        {
            return (<small>{responseData.error}</small>);
        }
        else {
            return (<br />);
        }
    }

    const renderSecretForm = () => {
        if (responseData && !responseData.error) {
            return (< br />);
        }
        else {
            return (
                <Row>
                    <Col>Your Name: <input value={userName} onChange={e => setUserName(e.target.value)} /></Col>
                    <Col>Secret Code: <input value={passCode} onChange={e => setPassCode(e.target.value)} type="password" /></Col>
                    <Col><button onClick={() => fetchData()} type="submit">Show me the secret</button></Col>
                    <hr className="featurette-divider" />
                &nbsp;
                </Row>
            );
        }

    }

    const respDataError: apiResponse = {
        count: 0,
        imageUrlPrefix: '',
        error: "Sorry, secret code did not match"
    }

    const fetchData = () => {
        axios.get(`https://security.bloofle.net/api/AccessChecker?name=${userName}&accessCode=${passCode}`)
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                setResponseData(respDataError);
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
            {renderSecretForm()}
            {renderAwardsGallery()}
        </Container>
    );
}