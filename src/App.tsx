import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-bebas-neue';
import atlantis from './media/atlantis.jpg';
import createMemories from './media/creatememories.jpg';
import bonfire from './media/bonfire.jpg';
import { Header } from './components/header';
import { Carousel, CarouselItem } from 'react-bootstrap';

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
    </div>
  );
}

export default App;
