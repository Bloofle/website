import React from 'react';
import './App.css';
import 'typeface-bebas-neue';
import { Routes } from './routes/routes';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
