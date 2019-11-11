import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
// Components
import AnarchyFooter from './components/AnarchyFooter';
import IntroImg from './components/IntroImg';
import JoinUs from './components/JoinUs';
import Merchandise from './components/Merchandise';
import NavController from './components/NavController';
import Shows from './components/Shows';
import TheBand from './components/TheBand';

const App = (props) => {

  return (
    <div className="App" >
      <Container>
        <IntroImg />
        <NavController />
        <TheBand />
        <Shows />
        <Merchandise />
        <JoinUs />
        <AnarchyFooter />
      </Container>
    </div>
  );
}

export default App;
