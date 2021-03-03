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
            <h3>Atlantis</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={createMemories}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bonfire}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
