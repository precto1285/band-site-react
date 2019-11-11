import React, { Component } from 'react';
import './App.css';
// Components
import Footer from './components/Footer';
import IntroImg from './components/IntroImg';
import JoinUs from './components/JoinUs';
import Merchandise from './components/Merchandise';
import NavController from './components/NavController';
import Shows from './components/Shows';
import TheBand from './components/TheBand';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <IntroImg />
        <NavController />
        <TheBand />
        <Shows />
        <Merchandise />
        <JoinUs />
        <Footer />
      </div>
    );
  }
}

export default App;
