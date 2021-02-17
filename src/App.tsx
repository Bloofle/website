import React from 'react';
import logo from './logo.svg';
import './App.css';
const bebasFontFamily = 'typeface-bebas-neue';
require(bebasFontFamily);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am Bloofle the VR!!!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCzJgaiH8-MpyGb5VdXcJurg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Youtube Channel
        </a>
      </header>
    </div>
  );
}

export default App;
