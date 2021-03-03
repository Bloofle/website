import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-bebas-neue';
import atlantis from './media/atlantis.jpg';
import createMemories from './media/creatememories.jpg';
import bonfire from './media/bonfire.jpg';
import mfv from './media/MFV.jpg';
import atlantis_view from './media/atlantis_view.jpg';
import serenity from './media/serenity.jpg';
import { Header } from './components/header';
import { Carousel, CarouselItem, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={atlantis} alt="Atlantis" />
          <Carousel.Caption>
            <h3>Imagination is key</h3>
            <p>Whether it's from taking photos or taking in the view, enjoy it while you can.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={createMemories}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Create memories</h3>
            <p>These rooms are best for great time with your special partner, scenery takes emotion to the next level. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bonfire}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Take a seat</h3>
            <p>Relax, sit down and get comfortable.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <Container className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded-circle" src={atlantis_view} alt="Gate to Atlantis" width="140" height="140" />
            <h2>Gate to Atlantis</h2>
            <p>Gate to Atlantis is an epic experience of the mystical Lost City of Atlantis, Poseidon would be proud.</p>
            <p><a className="btn btn-secondary" href="https://rec.net/room/GateToAtlantis" target = "_blank" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src= {mfv} alt="Generic placeholder image" width="140" height="140" />
            <h2>Mount Fuji View</h2>
            <p>Gaze at the view, Huddle around the bonfire, Chat with your friends and get an incredible profile picture.</p>
            <p><a className="btn btn-secondary" href="https://rec.net/room/MountFujiView" target = "_blank" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded-circle" src={serenity} alt="Cliffside Serenity" width="140" height="140" />
            <h2>Cliffside Serenity</h2>
            <p>The perfect hangout for all hangout lovers! This experience will take you on a trip of beauty, amazement and relaxation!</p>
            <p><a className="btn btn-secondary" href="https://rec.net/room/CliffsideSerenity" target = "_blank" role="button">View details »</a></p>
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />
      </Container>
    </div>
  );
}

export default App;
